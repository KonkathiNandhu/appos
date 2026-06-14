import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/users/user.js';
import UnitMaster from '../../models/unitmaster/unitmaster.js';
import ActivityMaster from '../../models/activitymaster/activitymaster.js';
import Group from '../../models/groups/group.js';
import { checkApiKey } from '../../middleware/apikey.js';
import { checkAuth } from '../../middleware/auth.js';

const JWT_SECRET = process.env.JWT_SECRET || 'shilparamam-apgov-jwt-secret-2024-change-in-production';
const router = express.Router();

// POST /api/users/login
router.post('/login', checkApiKey, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, status: '1' }).lean();
        if (!user) return res.json({ messagecode: 110, message: 'Invalid credentials' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.json({ messagecode: 110, message: 'Invalid credentials' });

        const token = jwt.sign(
            { userid: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        // Manually populate unit, activity and group (Mixed type fields don't auto-populate)
        const [unitData, activityData, groupData] = await Promise.all([
            user.unit_id ? UnitMaster.findById(user.unit_id).lean().catch(() => null) : null,
            user.activity_id ? ActivityMaster.findById(user.activity_id).lean().catch(() => null) : null,
            user.group_id ? Group.findById(user.group_id).lean().catch(() => null) : null,
        ]);

        res.json({
            messagecode: 100,
            message: 'Login successful',
            token,
            userid: user._id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            mobile: user.mobile,
            time_zone: user.time_zone,
            date_format: user.date_format,
            time_format: user.time_format,
            unit_id: unitData,
            activity_id: activityData,
            is_super_admin: user.is_super_admin,
            is_admin_group: groupData?.is_admin || false,
            group_id: groupData,
        });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// GET /api/users/getallusers
router.get('/getallusers', checkApiKey, async (req, res) => {
    try {
        const users = await User.find().populate('group_id').populate('unit_id').lean();
        res.json({ messagecode: 100, message: 'Users fetched', users });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// POST /api/users/  (create or update)
router.post('/', checkApiKey, async (req, res) => {
    try {
        const data = req.body;
        if (data._id) {
            // Update
            if (data.password && !data.password.startsWith('$2b$')) {
                data.password = await bcrypt.hash(data.password, 10);
            }
            data.modified_date = new Date().toUTCString();
            const user = await User.findByIdAndUpdate(data._id, data, { new: true });
            return res.json({ messagecode: 100, message: 'User updated', user });
        }
        // Create
        const hashed = await bcrypt.hash(data.password, 10);
        const user = new User({ ...data, password: hashed });
        await user.save();
        res.json({ messagecode: 100, message: 'User created', user });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

// DELETE /api/users/:id
router.delete('/:id', checkApiKey, async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, { status: '0' });
        res.json({ messagecode: 100, message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ messagecode: 110, message: err.message });
    }
});

export default router;
