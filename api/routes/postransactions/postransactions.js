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

    // Build UPI deep link from response or paytm_config fields
    const upiVpa = cfg.upi_vpa || '';
    const merchantName = encodeURIComponent(cfg.merchant_name || 'Shilparamam');
    const mc = cfg.mc || '';
    const amtStr = Number(amount).toFixed(2);
    const qr_data = response?.body?.qrData ||
        `upi://pay?pa=${upiVpa}&pn=${merchantName}&mc=${mc}&tr=${orderId}&am=${amtStr}&cu=INR`;

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
        const from = new Date(fromdate);
        const to = new Date(todate);
        to.setHours(23, 59, 59, 999);

        const query = {
            system_order_date_time: { $gte: from, $lte: to },
        };
        if (unit_id) query.$or = idFilter('unit_id', unit_id);

        const filteredorders = await PosTransactions.find(query).lean();
        res.json({ messagecode: 100, message: 'Orders fetched', filteredorders });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getordersbetweendatesbyactivity
router.post('/getordersbetweendatesbyactivity', checkApiKey, async (req, res) => {
    try {
        // Accept both from_date/to_date (admin) and fromdate/todate (POS app)
        const from_date = req.body.from_date || req.body.fromdate;
        const to_date = req.body.to_date || req.body.todate;
        const { unit_id, activity_id } = req.body;
        const from = new Date(from_date);
        const to = new Date(to_date);
        to.setHours(23, 59, 59, 999);

        const query = { system_order_date_time: { $gte: from, $lte: to } };
        if (unit_id) query.$or = idFilter('unit_id', unit_id);
        if (activity_id) {
            const actFilter = idFilter('activity_id', activity_id);
            query.$and = query.$and ? [...query.$and, { $or: actFilter }] : [{ $or: actFilter }];
        }

        const [orders, actMap] = await Promise.all([
            PosTransactions.find(query).lean(),
            buildActivityMap()
        ]);

        // Group by activity
        const grouped = {};
        orders.forEach(o => {
            const aid = resolveId(o.activity_id);
            const aname = o.activity_id?.activity_name || actMap[aid] || aid || 'Unknown';
            if (!grouped[aid]) grouped[aid] = { activity_id: aid, activity_name: aname, orders: [], total: 0 };
            grouped[aid].orders.push(o);
            grouped[aid].total += Number(o.total_amount || 0);
        });

        res.json({
            messagecode: 100, message: 'Orders fetched',
            filteredorders: orders,  // POS app reads filteredorders
            orders,
            grouped_by_activity: Object.values(grouped)
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
