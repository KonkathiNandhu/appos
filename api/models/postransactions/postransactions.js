import mongoose from 'mongoose';

const chosenItemSchema = new mongoose.Schema({
    itemid: String,
    itemname: String,
    itemprice: String,
    itemdescription: String,
    quantity: Number,
    subtotal: Number,
}, { _id: false });

const posTransactionSchema = new mongoose.Schema({
    unit_id: mongoose.Schema.Types.Mixed,
    activity_id: mongoose.Schema.Types.Mixed,
    choosen_items: [chosenItemSchema],
    total_amount: Number,
    payment_mode: String,
    customer_name: String,
    serial_no: Number,
    order_id: String,
    qr_code_data: mongoose.Schema.Types.Mixed,
    status: { type: Number, default: 1 },
    is_print_completed: { type: Boolean, default: false },
    system_order_date_time: { type: Date, default: Date.now },
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
});

export default mongoose.model('PosTransactions', posTransactionSchema);
