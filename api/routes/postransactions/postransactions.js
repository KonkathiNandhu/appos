import express from 'express';
import mongoose from 'mongoose';
import https from 'https';
import CryptoJS from 'crypto-js';
import PosTransactions from '../../models/postransactions/postransactions.js';
import UnitMaster from '../../models/unitmaster/unitmaster.js';
import ActivityMaster from '../../models/activitymaster/activitymaster.js';
import { checkApiKey } from '../../middleware/apikey.js';
import { v4 as uuidv4 } from 'uuid';

// ── Paytm QR helpers ────────────────────────────────────────────────────────

function paytmChecksum(bodyObj, merchantKey) {
    const bodyStr = JSON.stringify(bodyObj);
    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(bodyStr, merchantKey));
}

function httpsPost(hostname, path, payload) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(payload);
        const options = {
            hostname,
            path,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(data) }
        };
        const req = https.request(options, (res) => {
            let body = '';
            res.on('data', chunk => { body += chunk; });
            res.on('end', () => {
                try { resolve(JSON.parse(body)); } catch { resolve(body); }
            });
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function generatePaytmQR(cfg, orderId, amount) {
    const body = {
        mid: cfg.mid,
        orderId: String(orderId),
        amount: Number(amount).toFixed(2),
        businessType: 'UPI_QR_CODE',
        posId: '01'
    };
    const timestamp = Date.now().toString();
    const signature = paytmChecksum(body, cfg.merchant_key);
    const payload = {
        head: { version: 'v1', timestamp, clientId: cfg.client_id || 'C11', signature },
        body
    };
    const hostname = cfg.hostname || 'securegw.paytm.in';
    const response = await httpsPost(hostname, '/paymentservices/qr/create', payload);

    const amtStr = Number(amount).toFixed(2);
    // Use Paytm's qrData (UPI URI) if returned; fall back to upi_vpa if configured
    const paytmQrData = response?.body?.qrData || null;
    const upiVpa = cfg.upi_vpa || null;
    const merchantName = encodeURIComponent(cfg.merchant_name || 'Shilparamam');
    const qr_data = paytmQrData ||
        (upiVpa ? `upi://pay?pa=${upiVpa}&pn=${merchantName}&tr=${orderId}&am=${amtStr}&cu=INR` : null);

    return {
        qr_data,
        response,
        transaction_id: response?.body?.txnId || response?.body?.qrCodeId || ''
    };
}

async function checkPaytmTxnStatus(cfg, orderId) {
    const body = { mid: cfg.mid, orderId: String(orderId) };
    const signature = paytmChecksum(body, cfg.merchant_key);
    const payload = {
        head: { version: 'v1', signature },
        body
    };
    const hostname = cfg.hostname || 'securegw.paytm.in';
    return await httpsPost(hostname, '/v3/order/status', payload);
}

// ────────────────────────────────────────────────────────────────────────────

function resolveId(field) {
    return field?._id ? String(field._id) : String(field || '');
}

function idFilter(fieldName, id) {
    const clauses = [
        { [`${fieldName}._id`]: id },
        { [fieldName]: id }
    ];
    try { clauses.push({ [fieldName]: new mongoose.Types.ObjectId(id) }); } catch (_) {}
    return clauses;
}

async function buildUnitMap() {
    const units = await UnitMaster.find({}).lean();
    const map = {};
    units.forEach(u => { map[String(u._id)] = u.unit_name || String(u._id); });
    return map;
}

async function buildActivityMap() {
    const acts = await ActivityMaster.find({}).lean();
    const map = {};
    acts.forEach(a => { map[String(a._id)] = a.activity_name || String(a._id); });
    return map;
}

const router = express.Router();

// POST /api/postransactions  — save a new transaction
router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (!data.order_id) {
            const now = new Date();
            const ts = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14);
            data.order_id = 'SHILP' + ts;
        }
        data.system_order_date_time = new Date();

        // Generate Paytm QR code for UPI payments
        if (data.payment_mode === 'UPI' && data.unit_id) {
            try {
                const unitId = data.unit_id?._id || data.unit_id;
                const unit = await UnitMaster.findById(unitId).lean();
                const cfg = unit?.paytm_config;
                if (cfg?.mid && cfg?.merchant_key) {
                    data.qr_code_data = await generatePaytmQR(cfg, data.order_id, data.total_amount);
                }
            } catch (paytmErr) {
                console.error('Paytm QR generation failed:', paytmErr.message);
                // Transaction still saves — QR generation failure is non-fatal
            }
        }

        const tx = new PosTransactions(data);
        await tx.save();
        res.json({ messagecode: 100, message: 'Transaction saved', postransaction: tx });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/check-transaction-status
router.post('/check-transaction-status', checkApiKey, async (req, res) => {
    try {
        const { order_id } = req.body;
        const tx = await PosTransactions.findOne({ order_id }).lean();
        if (!tx) return res.json({ messagecode: 110, message: 'Transaction not found' });

        // Check live Paytm payment status for UPI orders
        let paytmStatus = null;
        if (tx.payment_mode === 'UPI' && tx.unit_id) {
            try {
                const unitId = tx.unit_id?._id || tx.unit_id;
                const unit = await UnitMaster.findById(unitId).lean();
                const cfg = unit?.paytm_config;
                if (cfg?.mid && cfg?.merchant_key) {
                    paytmStatus = await checkPaytmTxnStatus(cfg, order_id);
                }
            } catch (e) {
                console.error('Paytm status check failed:', e.message);
            }
        }

        res.json({ messagecode: 100, message: 'Transaction found', transaction: tx, paytm_status: paytmStatus });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/updateprintflag
router.post('/updateprintflag', checkApiKey, async (req, res) => {
    try {
        const { order_id, is_print_completed } = req.body;
        await PosTransactions.updateOne({ order_id }, { is_print_completed: true });
        res.json({ messagecode: 100, message: 'Print flag updated' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getordersbetweendates/
router.post('/getordersbetweendates/', checkApiKey, async (req, res) => {
    try {
        const { fromdate, todate, unit_id } = req.body;
        const page  = Math.max(1, parseInt(req.body.page)  || 1);
        const limit = Math.min(100, Math.max(1, parseInt(req.body.limit) || 50));
        const skip  = (page - 1) * limit;

        const from = new Date(fromdate);
        const to   = new Date(todate);
        to.setHours(23, 59, 59, 999);

        const query = { system_order_date_time: { $gte: from, $lte: to } };
        if (unit_id) query.$or = idFilter('unit_id', unit_id);

        const toDouble = f => ({ $toDouble: { $ifNull: [f, 0] } });

        const [aggResult, filteredorders, totalCount] = await Promise.all([
            PosTransactions.aggregate([
                { $match: query },
                { $group: {
                    _id: null,
                    total_amount: { $sum: toDouble('$total_amount') },
                    cash_total:   { $sum: { $cond: [{ $eq: ['$payment_mode', 'Cash'] }, toDouble('$total_amount'), 0] } },
                    upi_total:    { $sum: { $cond: [{ $eq: ['$payment_mode', 'UPI']  }, toDouble('$total_amount'), 0] } },
                    count: { $sum: 1 }
                }}
            ]).allowDiskUse(true),
            PosTransactions.find(query).sort({ system_order_date_time: -1 }).skip(skip).limit(limit).lean(),
            PosTransactions.countDocuments(query)
        ]);

        const totals     = aggResult[0] || { total_amount: 0, cash_total: 0, upi_total: 0, count: 0 };
        const totalPages = Math.max(1, Math.ceil(totalCount / limit));

        res.json({ messagecode: 100, message: 'Orders fetched', filteredorders, totals, totalCount, page, totalPages });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getordersbetweendatesbyactivity
router.post('/getordersbetweendatesbyactivity', checkApiKey, async (req, res) => {
    try {
        const from_date = req.body.from_date || req.body.fromdate;
        const to_date   = req.body.to_date   || req.body.todate;
        const { unit_id, activity_id } = req.body;
        const page  = Math.max(1, parseInt(req.body.page)  || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.body.limit) || 10));
        const skip  = (page - 1) * limit;

        const from = new Date(from_date);
        const to   = new Date(to_date);
        to.setHours(23, 59, 59, 999);

        // Date range is the most selective filter — index on system_order_date_time handles this
        const matchStage = { system_order_date_time: { $gte: from, $lte: to } };

        // unit_id in DB is stored as embedded object {_id, unit_name} — match on ._id
        if (unit_id) {
            let oid;
            try { oid = new mongoose.Types.ObjectId(unit_id); } catch (_) {}
            matchStage.$or = oid
                ? [{ 'unit_id._id': oid }, { unit_id: oid }, { 'unit_id._id': unit_id }]
                : [{ 'unit_id._id': unit_id }, { unit_id: unit_id }];
        }
        if (activity_id) {
            let aoid;
            try { aoid = new mongoose.Types.ObjectId(activity_id); } catch (_) {}
            const actClauses = aoid
                ? [{ 'activity_id._id': aoid }, { activity_id: aoid }]
                : [{ 'activity_id._id': activity_id }, { activity_id: activity_id }];
            matchStage.$and = [{ $or: actClauses }];
        }

        const toDouble = f => ({ $toDouble: { $ifNull: [f, 0] } });

        // Run aggregation (totals + items) and paginated find in parallel
        const [aggResult, pagedOrders, totalCount] = await Promise.all([
            PosTransactions.aggregate([
                { $match: matchStage },
                { $facet: {
                    totals: [{ $group: {
                        _id: null,
                        total_amount: { $sum: toDouble('$total_amount') },
                        cash_total:   { $sum: { $cond: [{ $eq: ['$payment_mode', 'Cash'] }, toDouble('$total_amount'), 0] } },
                        upi_total:    { $sum: { $cond: [{ $eq: ['$payment_mode', 'UPI']  }, toDouble('$total_amount'), 0] } },
                        count: { $sum: 1 }
                    }}],
                    item_summary: [
                        { $unwind: { path: '$choosen_items', preserveNullAndEmptyArrays: false } },
                        { $group: {
                            _id:       '$choosen_items.itemname',
                            itemname:  { $first: '$choosen_items.itemname' },
                            itemid:    { $first: '$choosen_items.itemid' },
                            quantity:  { $sum: toDouble('$choosen_items.quantity') },
                            linetotal: { $sum: toDouble('$choosen_items.linetotal') }
                        }},
                        { $sort: { linetotal: -1 } }
                    ],
                    activity_groups: [{ $group: {
                        _id:           { $toString: { $ifNull: ['$activity_id._id', '$activity_id'] } },
                        activity_name: { $first: '$activity_id.activity_name' },
                        total:         { $sum: toDouble('$total_amount') }
                    }}]
                }}
            ]).allowDiskUse(true),
            PosTransactions.find(matchStage).sort({ system_order_date_time: -1 }).skip(skip).limit(limit).lean(),
            PosTransactions.countDocuments(matchStage)
        ]);

        const agg        = (aggResult[0] || {});
        const totals     = (agg.totals || [])[0] || { total_amount: 0, cash_total: 0, upi_total: 0, count: 0 };
        const totalPages = Math.max(1, Math.ceil(totalCount / limit));

        const grouped_by_activity = (agg.activity_groups || []).map(g => ({
            activity_id:   g._id,
            activity_name: g.activity_name || 'Unknown',
            total:         g.total
        }));

        res.json({
            messagecode: 100, message: 'Orders fetched',
            totals,
            item_summary:   agg.item_summary || [],
            filteredorders: pagedOrders,
            totalCount, page, totalPages,
            grouped_by_activity,
            orders: pagedOrders
        });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getconsolidatedsalesreportbyuser
router.post('/getconsolidatedsalesreportbyuser', checkApiKey, async (req, res) => {
    try {
        const { from_date, to_date, unit_id } = req.body;
        const from = new Date(from_date);
        const to = new Date(to_date);
        to.setHours(23, 59, 59, 999);

        const query = { system_order_date_time: { $gte: from, $lte: to } };
        if (unit_id) query.$or = idFilter('unit_id', unit_id);

        const orders = await PosTransactions.find(query).lean();

        // Group by created_by user
        const grouped = {};
        orders.forEach(o => {
            const uid = o.created_by?._id || 'unknown';
            const uname = o.created_by ? `${o.created_by.first_name || ''} ${o.created_by.last_name || ''}`.trim() : 'Unknown';
            if (!grouped[uid]) grouped[uid] = { user_id: uid, user_name: uname, orders: [], total: 0 };
            grouped[uid].orders.push(o);
            grouped[uid].total += Number(o.total_amount || 0);
        });

        res.json({
            messagecode: 100, message: 'Report fetched',
            report: Object.values(grouped)
        });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getunitwiseconsolidatedsalesreport
router.post('/getunitwiseconsolidatedsalesreport', checkApiKey, async (req, res) => {
    try {
        const { from_date, to_date } = req.body;
        const from = new Date(from_date);
        const to = new Date(to_date);
        to.setHours(23, 59, 59, 999);

        const [orders, unitMap] = await Promise.all([
            PosTransactions.find({ system_order_date_time: { $gte: from, $lte: to } }).lean(),
            buildUnitMap()
        ]);

        const grouped = {};
        orders.forEach(o => {
            const uid = resolveId(o.unit_id);
            const uname = o.unit_id?.unit_name || unitMap[uid] || uid || 'Unknown';
            if (!grouped[uid]) grouped[uid] = { unit_id: uid, unit_name: uname, orders: [], total: 0 };
            grouped[uid].orders.push(o);
            grouped[uid].total += Number(o.total_amount || 0);
        });

        res.json({
            messagecode: 100, message: 'Unit-wise report fetched',
            report: Object.values(grouped)
        });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
