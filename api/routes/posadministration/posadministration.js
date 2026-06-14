import express from 'express';
import PosAdministration from '../../models/posadministration/posadministration.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

// GET /api/posadministration/getactivitiesbyunit/:unit_id
router.get('/getactivitiesbyunit/:unit_id', checkApiKey, async (req, res) => {
    try {
        const configs = await PosAdministration.find({
            'unit_id._id': req.params.unit_id,
            status: '1'
        }).lean();
        // Also try direct ObjectId match
        if (!configs.length) {
            const configs2 = await PosAdministration.find({
                unit_id: req.params.unit_id,
                status: '1'
            }).lean();
            return res.json({ messagecode: 100, message: 'POS config fetched', posadmin: configs2 });
        }
        res.json({ messagecode: 100, message: 'POS config fetched', posadmin: configs });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/posadministration  (create or update)
router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            data.modified_date = new Date().toUTCString();
            const config = await PosAdministration.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'POS config updated', posadmin: config });
        }
        const config = new PosAdministration(data);
        await config.save();
        res.json({ messagecode: 100, message: 'POS config created', posadmin: config });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
