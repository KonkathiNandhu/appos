import express from 'express';
import SuperCategory from '../../models/supercategory/supercategory.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

router.get('/getallsupercategories', checkApiKey, async (req, res) => {
    try {
        const supercategories = await SuperCategory.find({ status: '1' }).lean();
        res.json({ messagecode: 100, message: 'Super categories fetched', supercategories });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            data.modified_date = new Date().toUTCString();
            const sc = await SuperCategory.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'Super category updated', supercategory: sc });
        }
        const sc = new SuperCategory(data);
        await sc.save();
        res.json({ messagecode: 100, message: 'Super category created', supercategory: sc });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await SuperCategory.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'Super category deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
