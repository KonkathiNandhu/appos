const APP_URL = process.env.APP_URL || 'http://localhost:8080';

export default {
    image_upload_path: APP_URL,
    page_id_encryption_private_key: process.env.CRYPTO_KEY || 'smaartt-dcx-2022-prod-crypto-key',
    page_id_encryption_public_key: process.env.CRYPTO_PUB || 'customer_admin_smaartt_dcx',
    sendgrid_activation_key: process.env.SENDGRID_KEY || '',
    email_send_display_name: 'Shilparamam',
    email_send_from_email: process.env.EMAIL_FROM || '',
    trigger_emails: process.env.TRIGGER_EMAILS === 'true',
    otp_validity_minutes: 2,
    images_server: `${APP_URL}/uploads/`,
    documents_path: 'documentuploads/',
    history_enabled: true,
    api_keys: [
        process.env.API_KEY_ADMIN || 'a2603c40-fd2e-4c7b-bf09-007022ad4af9',
        process.env.API_KEY_POS   || '981eb9b3-229e-4078-a0b5-605f1099acab'
    ]
};
