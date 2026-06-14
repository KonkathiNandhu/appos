import express from 'express';
import env from '../../../environment/environment.js';

const router = express.Router();

// GET /api/secure/appkeygen — used by the web frontend to validate the API key
router.get('/appkeygen', (req, res) => {
    const key = req.headers['x-api-key'];
    if (!key || !env.api_keys.includes(key)) {
        return res.status(401).json({ messagecode: 110, message: 'Invalid API key' });
    }
    res.json({ messagecode: 100, message: 'Valid', api_key: key });
});

export default router;
