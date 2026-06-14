import express from 'express';
import Group from '../../models/groups/group.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

router.get('/getallgroups', checkApiKey, async (req, res) => {
    try {
        const groups = await Group.find({ status: '1' }).lean();
        res.json({ messagecode: 100, message: 'Groups fetched', groups });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            data.modified_date = new Date().toUTCString();
            const group = await Group.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'Group updated', group });
        }
        const group = new Group(data);
        await group.save();
        res.json({ messagecode: 100, message: 'Group created', group });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await Group.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'Group deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
