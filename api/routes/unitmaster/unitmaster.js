import express from 'express';
import UnitMaster from '../../models/unitmaster/unitmaster.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

router.get('/getallunits', checkApiKey, async (req, res) => {
    try {
        const units = await UnitMaster.find({ status: '1' }).lean();
        res.json({ messagecode: 100, message: 'Units fetched', units });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            const unit = await UnitMaster.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'Unit updated', unit });
        }
        const unit = new UnitMaster(data);
        await unit.save();
        res.json({ messagecode: 100, message: 'Unit created', unit });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await UnitMaster.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'Unit deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
