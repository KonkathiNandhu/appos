import mongoose from 'mongoose';

const superCategorySchema = new mongoose.Schema({
    super_category_name: String,
    super_category_code: String,
    super_category_description: String,
    status: { type: String, default: '1' },
    internal_status: { type: String, default: '1' },
    history: { type: Array, default: [] },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
    modified_by: mongoose.Schema.Types.Mixed,
    modified_date: String,
});

export default mongoose.model('SuperCategory', superCategorySchema);
