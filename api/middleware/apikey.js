import env from '../../environment/environment.js';

export function checkApiKey(req, res, next) {
    const key = req.headers['x-api-key'];
    if (!key || !env.api_keys.includes(key)) {
        return res.status(401).json({ messagecode: 110, message: 'Invalid or missing API key' });
    }
    next();
}
