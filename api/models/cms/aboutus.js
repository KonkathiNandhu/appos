import mongoose from 'mongoose';

const aboutusSchema = new mongoose.Schema({
    status: { type: String, default: '1' },
    internal_status: { type: String, default: '1' },
    created_date: { type: String, default: () => new Date().toUTCString() },
}, { strict: false });

export default mongoose.model('AboutUs', aboutusSchema);
