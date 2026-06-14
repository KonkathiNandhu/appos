import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
    sub_category_name: String,
    super_category_id: mongoose.Schema.Types.Mixed,
    sub_category_description: String,
    status: { type: String, default: '1' },
    internal_status: { type: String, default: '1' },
    history: { type: Array, default: [] },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
});

export default mongoose.model('SubCategory', subCategorySchema);
