import express from 'express';
import PosAdministration from '../../models/posadministration/posadministration.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

// GET /api/posadministration/getactivitiesbyunit/:unit_id
router.get('/getactivitiesbyunit/:unit_id', checkApiKey, async (req, res) => {
    try {
        let configs = await PosAdministration.find({
            'unit_id._id': req.params.unit_id,
            status: '1'
        }).lean();

        if (!configs.length) {
            configs = await PosAdministration.find({
                unit_id: req.params.unit_id,
                status: '1'
            }).lean();
        }

        // Transform to the format the POS app expects:
        // { posdata: { activities: [{ _id, activity_name, billing_items: [...] }] } }
        const activities = configs.map(cfg => {
            const act = cfg.activity_id;
            return {
                _id: act?._id || act,
                activity_name: act?.activity_name || '',
                activity_code: act?.activity_code || '',
                billing_items: (cfg.ticket_items || []).map(item => ({
                    itemid: item.itemid,
                    itemname: item.itemname,
                    itemprice: item.itemprice,
                    itemdescription: item.itemdescription || '',
                    sort_order: item.sort_order
                }))
            };
        });

        res.json({ messagecode: 100, message: 'POS config fetched', posdata: { activities } });
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
