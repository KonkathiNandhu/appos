import express from 'express';
import mongoose from 'mongoose';
import PosAdministration from '../../models/posadministration/posadministration.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

// GET /api/posadministration/getactivitiesbyunit/:unit_id
router.get('/getactivitiesbyunit/:unit_id', checkApiKey, async (req, res) => {
    try {
        const unitId = req.params.unit_id;

        // Build query variants to handle all storage formats of unit_id:
        // 1. Real dump: unit_id stored as plain MongoDB ObjectId
        // 2. Embedded object: unit_id stored as { _id: ..., unit_name: ... }
        // 3. String: unit_id stored as plain string
        const orClauses = [
            { 'unit_id._id': unitId },
            { unit_id: unitId }
        ];
        try {
            orClauses.push({ unit_id: new mongoose.Types.ObjectId(unitId) });
        } catch (_) {}

        const config = await PosAdministration.findOne({
            $or: orClauses,
            status: { $in: ['1', 1, true] }
        }).lean();

        if (!config) {
            return res.json({ messagecode: 100, message: 'No POS config found', posdata: { activities: [] } });
        }

        let activities = [];

        if (config.activities && Array.isArray(config.activities)) {
            // Real dump format: one doc per unit, nested activities[] with billing_items
            activities = config.activities
                .filter(act => Array.isArray(act.billing_items) && act.billing_items.length > 0)
                .map(act => ({
                    _id: act._id,
                    activity_name: act.activity_name || '',
                    activity_code: act.activity_code || '',
                    billing_items: act.billing_items.map(item => ({
                        itemid: item._id || item.itemid,
                        itemname: item.itemname,
                        itemprice: item.itemprice,
                        itemdescription: item.itemdescription || '',
                        sort_order: item.sort_order || 0
                    }))
                }));
        } else if (config.ticket_items) {
            // Old reconstructed format: individual docs with ticket_items
            const act = config.activity_id;
            activities = [{
                _id: act?._id || act,
                activity_name: act?.activity_name || '',
                billing_items: (config.ticket_items || []).map(item => ({
                    itemid: item.itemid,
                    itemname: item.itemname,
                    itemprice: item.itemprice,
                    itemdescription: item.itemdescription || '',
                    sort_order: item.sort_order
                }))
            }];
        }

        res.json({ messagecode: 100, message: 'POS config fetched', posdata: { activities } });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// GET /api/posadministration/getallconfigs
router.get('/getallconfigs', checkApiKey, async (req, res) => {
    try {
        const configs = await PosAdministration.find({ status: { $in: ['1', 1] } }).lean();
        res.json({ messagecode: 100, posadmin: configs });
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
