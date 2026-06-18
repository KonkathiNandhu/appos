import express from 'express';
import PosTransactions from '../../models/postransactions/postransactions.js';
import { checkApiKey } from '../../middleware/apikey.js';
import { v4 as uuidv4 } from 'uuid';

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
        res.json({ messagecode: 100, message: 'Transaction found', transaction: tx });
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
        if (unit_id) query['unit_id._id'] = unit_id;

        const filteredorders = await PosTransactions.find(query).lean();
        res.json({ messagecode: 100, message: 'Orders fetched', filteredorders });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/postransactions/getordersbetweendatesbyactivity
router.post('/getordersbetweendatesbyactivity', checkApiKey, async (req, res) => {
    try {
        const { from_date, to_date, unit_id, activity_id } = req.body;
        const from = new Date(from_date);
        const to = new Date(to_date);
        to.setHours(23, 59, 59, 999);

        const query = { system_order_date_time: { $gte: from, $lte: to } };
        if (unit_id) query['unit_id._id'] = unit_id;
        if (activity_id) query['activity_id._id'] = activity_id;

        const orders = await PosTransactions.find(query).lean();

        // Group by activity
        const grouped = {};
        orders.forEach(o => {
            const aid = o.activity_id?._id || o.activity_id || 'unknown';
            const aname = o.activity_id?.activity_name || 'Unknown';
            if (!grouped[aid]) grouped[aid] = { activity_id: aid, activity_name: aname, orders: [], total: 0 };
            grouped[aid].orders.push(o);
            grouped[aid].total += Number(o.total_amount || 0);
        });

        res.json({
            messagecode: 100, message: 'Orders fetched',
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
        if (unit_id) query['unit_id._id'] = unit_id;

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

        const orders = await PosTransactions.find({
            system_order_date_time: { $gte: from, $lte: to }
        }).lean();

        const grouped = {};
        orders.forEach(o => {
            const uid = o.unit_id?._id || o.unit_id || 'unknown';
            const uname = o.unit_id?.unit_name || 'Unknown';
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
