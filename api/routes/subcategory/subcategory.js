import express from 'express';
import SubCategory from '../../models/subcategory/subcategory.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

router.get('/getallsubcategories', checkApiKey, async (req, res) => {
    try {
        const subcategories = await SubCategory.find({ status: '1' }).populate('super_category_id').lean();
        res.json({ messagecode: 100, message: 'Sub categories fetched', subcategories });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/getcombinedlist', checkApiKey, async (req, res) => {
    try {
        const { super_category_ids } = req.body;
        const query = super_category_ids?.length
            ? { super_category_id: { $in: super_category_ids }, status: '1' }
            : { status: '1' };
        const subcategories = await SubCategory.find(query).populate('super_category_id').lean();
        res.json({ messagecode: 100, message: 'Combined list fetched', subcategories });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            const sc = await SubCategory.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'Sub category updated', subcategory: sc });
        }
        const sc = new SubCategory(data);
        await sc.save();
        res.json({ messagecode: 100, message: 'Sub category created', subcategory: sc });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await SubCategory.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'Sub category deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
