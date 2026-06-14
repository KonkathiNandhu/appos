import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
    unit_id: mongoose.Schema.Types.Mixed,
    title: String,
    message: String,
    type: String,
    is_read: { type: Boolean, default: false },
    status: { type: String, default: '1' },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
});

export default mongoose.model('Notification', notificationSchema);
