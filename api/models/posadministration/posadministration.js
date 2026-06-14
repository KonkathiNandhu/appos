import mongoose from 'mongoose';

const ticketItemSchema = new mongoose.Schema({
    itemid: String,
    itemname: String,
    itemprice: String,
    itemdescription: String,
    sort_order: Number,
}, { _id: false });

const posAdminSchema = new mongoose.Schema({
    unit_id: mongoose.Schema.Types.Mixed,
    activity_id: mongoose.Schema.Types.Mixed,
    ticket_items: [ticketItemSchema],
    status: { type: String, default: '1' },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
    modified_by: mongoose.Schema.Types.Mixed,
    modified_date: String,
});

export default mongoose.model('PosAdministration', posAdminSchema);
