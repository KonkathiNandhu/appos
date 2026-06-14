import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    password: String,
    email: { type: String, unique: true, sparse: true },
    mobile: String,
    group_id: { type: mongoose.Schema.Types.Mixed },
    question1: String, answer1: String,
    question2: String, answer2: String,
    question3: String, answer3: String,
    time_zone: String,
    date_format: String,
    time_format: String,
    unit_id: { type: mongoose.Schema.Types.Mixed },
    activity_id: { type: mongoose.Schema.Types.Mixed },
    status: { type: String, default: '1' },
    is_super_admin: { type: Boolean, default: false },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
    modified_by: mongoose.Schema.Types.Mixed,
    modified_date: String,
});

export default mongoose.model('User', userSchema);
