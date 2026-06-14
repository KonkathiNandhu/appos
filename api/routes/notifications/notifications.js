import express from 'express';
import Notification from '../../models/notifications/notification.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

// GET /api/notifications/getnotificationbyunits
router.get('/getnotificationbyunits', checkApiKey, async (req, res) => {
    try {
        const notifications = await Notification.find({ status: '1' }).lean();

        // Group by unit
        const unitMap = {};
        notifications.forEach(n => {
            const uid = n.unit_id?._id || n.unit_id || 'unknown';
            const uname = n.unit_id?.unit_name || 'Unknown';
            if (!unitMap[uid]) unitMap[uid] = { unit_id: uid, unit_name: uname, notifications: [] };
            unitMap[uid].notifications.push(n);
        });

        res.json({
            messagecode: 100,
            message: 'Notifications fetched',
            unitnotifications: Object.values(unitMap)
        });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/notifications
router.post('/', checkApiKey, async (req, res) => {
    try {
        const notif = new Notification(req.body);
        await notif.save();
        res.json({ messagecode: 100, message: 'Notification created', notification: notif });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
