import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
    activity_name: String,
    activity_code: String,
    activity_description: String,
    status: { type: String, default: '1' },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
});

export default mongoose.model('ActivityMaster', activitySchema, 'activities');
