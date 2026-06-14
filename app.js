import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import usersRouter from './api/routes/users/users.js';
import groupsRouter from './api/routes/groups/groups.js';
import unitmasterRouter from './api/routes/unitmaster/unitmaster.js';
import activitymasterRouter from './api/routes/activitymaster/activitymaster.js';
import supercategoryRouter from './api/routes/supercategory/supercategory.js';
import subcategoryRouter from './api/routes/subcategory/subcategory.js';
import posadminRouter from './api/routes/posadministration/posadministration.js';
import postransactionsRouter from './api/routes/postransactions/postransactions.js';
import notificationsRouter from './api/routes/notifications/notifications.js';
import imageuploaderRouter from './api/routes/imageuploader/imageuploader.js';
import cmsRouter from './api/routes/cms/cms.js';
import securityRouter from './api/routes/security/security.js';

const app = express();

// ── Database ──────────────────────────────────────────────────────────────────
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shilparamam';

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB:', MONGO_URI))
    .catch(err => console.error('❌ MongoDB connection error:', err.message));

mongoose.Promise = global.Promise;

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('Cache-Control', 'no-store');
    next();
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Static file serving
app.use('/uploads', express.static('uploads'));
app.use('/documentuploads', express.static('documentuploads'));
app.use('/appimages', express.static('appimages'));

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/users', usersRouter);
app.use('/api/groups', groupsRouter);
app.use('/api/unitmaster', unitmasterRouter);
app.use('/api/activitymaster', activitymasterRouter);
app.use('/api/supercategory', supercategoryRouter);
app.use('/api/subcategory', subcategoryRouter);
app.use('/api/posadministration', posadminRouter);
app.use('/api/postransactions', postransactionsRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/imageuploader', imageuploaderRouter);
app.use('/api/cms', cmsRouter);
app.use('/api/secure', securityRouter);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ messagecode: 404, message: `Route not found: ${req.method} ${req.path}` });
});

export default app;
