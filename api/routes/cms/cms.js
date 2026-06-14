import express from 'express';
import AbousUs from '../../models/cms/aboutus.js';
import {
    Handicrafts, Handlooms, FolkArts,
    CulturalEvents, VillageMuseums, Exhibitions, Tenders
} from '../../models/cms/genericcms.js';
import { checkApiKey } from '../../middleware/apikey.js';

const router = express.Router();

// Build CRUD routes for a CMS model
function cmsRoutes(Model, listKey, singleKey) {
    const r = express.Router();

    r.get('/getall/', checkApiKey, async (req, res) => {
        try {
            const docs = await Model.find({ status: '1', internal_status: '1' }).lean();
            res.json({ messagecode: 100, message: 'Fetched', [listKey]: docs });
        } catch (err) {
            res.status(500).json({ messagecode: 110, message: err.message });
        }
    });

    r.get('/:id', checkApiKey, async (req, res) => {
        try {
            const doc = await Model.findById(req.params.id).lean();
            if (!doc) return res.json({ messagecode: 110, message: 'Not found' });
            res.json({ messagecode: 100, [singleKey]: doc });
        } catch (err) {
            res.status(500).json({ messagecode: 110, message: err.message });
        }
    });

    r.post('/', checkApiKey, async (req, res) => {
        try {
            const data = req.body;
            if (data._id) {
                data.modified_date = new Date().toUTCString();
                const doc = await Model.findByIdAndUpdate(data._id, data, { new: true });
                return res.json({ messagecode: 100, message: 'Updated', [singleKey]: doc });
            }
            const doc = new Model(data);
            await doc.save();
            res.json({ messagecode: 100, message: 'Created', [singleKey]: doc });
        } catch (err) {
            res.status(500).json({ messagecode: 110, message: err.message });
        }
    });

    r.delete('/:id', checkApiKey, async (req, res) => {
        try {
            await Model.findByIdAndUpdate(req.params.id, { status: '0' });
            res.json({ messagecode: 100, message: 'Deleted' });
        } catch (err) {
            res.status(500).json({ messagecode: 110, message: err.message });
        }
    });

    return r;
}

router.use('/aboutus', cmsRoutes(AbousUs, 'aboutus_list', 'aboutus'));
router.use('/handicrafts', cmsRoutes(Handicrafts, 'handicrafts_list', 'handicrafts'));
router.use('/handlooms', cmsRoutes(Handlooms, 'handlooms_list', 'handlooms'));
router.use('/folkarts', cmsRoutes(FolkArts, 'folkarts_list', 'folkarts'));
router.use('/culturalevents', cmsRoutes(CulturalEvents, 'culturalevents_list', 'culturalevents'));
router.use('/villagemuseums', cmsRoutes(VillageMuseums, 'villagemuseums_list', 'villagemuseums'));
router.use('/exhibitions', cmsRoutes(Exhibitions, 'exhibitions_list', 'exhibitions'));
router.use('/tenders', cmsRoutes(Tenders, 'tenders_list', 'tenders'));

export default router;
