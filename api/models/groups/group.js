import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    group_name: String,
    group_code: String,
    group_description: String,
    status: { type: String, default: '1' },
    internal_status: { type: String, default: '1' },
    is_super_admin: { type: Boolean, default: false },
    is_admin: { type: Boolean, default: false },
    history: { type: Array, default: [] },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
    modified_by: mongoose.Schema.Types.Mixed,
    modified_date: String,
});

export default mongoose.model('Group', groupSchema);
