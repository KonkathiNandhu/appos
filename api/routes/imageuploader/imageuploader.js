import express from 'express';
import multer from 'multer';
import path from 'path';
import { checkApiKey } from '../../middleware/apikey.js';
import env from '../../../environment/environment.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dest = file.fieldname === 'myfile' ? 'documentuploads' : 'uploads';
        cb(null, dest);
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({ storage, limits: { fileSize: 50 * 1024 * 1024 } });

// POST /api/imageuploader/savedocument
router.post('/savedocument', checkApiKey, upload.single('myfile'), (req, res) => {
    if (!req.file) return res.json({ messagecode: 110, message: 'No file uploaded' });
    const url = `${env.image_upload_path}/documentuploads/${req.file.filename}`;
    res.json({ messagecode: 100, message: 'Document saved', url, filename: req.file.filename });
});

// POST /api/imageuploader/saveimage
router.post('/saveimage', checkApiKey, upload.single('myimage'), (req, res) => {
    if (!req.file) return res.json({ messagecode: 110, message: 'No file uploaded' });
    const url = `${env.image_upload_path}/uploads/${req.file.filename}`;
    res.json({ messagecode: 100, message: 'Image saved', url, filename: req.file.filename });
});

export default router;
