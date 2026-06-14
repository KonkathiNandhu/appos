import express from 'express';
import ActivityMaster from '../../models/activitymaster/activitymaster.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

router.get('/getallactivities', checkApiKey, async (req, res) => {
    try {
        const activities = await ActivityMaster.find({ status: '1' }).lean();
        res.json({ messagecode: 100, message: 'Activities fetched', activities });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            const activity = await ActivityMaster.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'Activity updated', activity });
        }
        const activity = new ActivityMaster(data);
        await activity.save();
        res.json({ messagecode: 100, message: 'Activity created', activity });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await ActivityMaster.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'Activity deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
