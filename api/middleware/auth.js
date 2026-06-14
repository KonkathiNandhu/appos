import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'shilparamam-apgov-jwt-secret-2024-change-in-production';

export function checkAuth(req, res, next) {
    try {
        const authHeader = req.headers['authorization'];
        if (!authHeader) return res.status(401).json({ messagecode: 110, message: 'No token provided' });
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userData = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ messagecode: 110, message: 'Authentication failed' });
    }
}
