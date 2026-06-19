import mongoose from 'mongoose';

const paytmConfigSchema = new mongoose.Schema({
    hostname: String,
    client_id: String,
    website: String,
    channel_id: String,
    mid: String,
    merchant_key: String,
    industry_type_id: String,
    upi_vpa: String,
    merchant_name: String,
    mc: String,
}, { _id: false });

const unitSchema = new mongoose.Schema({
    unit_name: String,
    unit_code: String,
    unit_description: String,
    status: { type: String, default: '1' },
    paytm_config: paytmConfigSchema,
    created_by: mongoose.Schema.Types.Mixed,
    created_date: { type: String, default: () => new Date().toUTCString() },
});

export default mongoose.model('UnitMaster', unitSchema, 'units');
