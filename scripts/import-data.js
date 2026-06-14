/**
 * Data import script — loads all dumped JSON data into MongoDB.
 * Run: node scripts/import-data.js
 */
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DUMP_DIR = path.join(__dirname, '../../data-dump');
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shilparamam';

// Import models
import User from '../api/models/users/user.js';
import Group from '../api/models/groups/group.js';
import UnitMaster from '../api/models/unitmaster/unitmaster.js';
import ActivityMaster from '../api/models/activitymaster/activitymaster.js';
import SuperCategory from '../api/models/supercategory/supercategory.js';
import SubCategory from '../api/models/subcategory/subcategory.js';
import PosTransactions from '../api/models/postransactions/postransactions.js';
import Notification from '../api/models/notifications/notification.js';
import AbousUs from '../api/models/cms/aboutus.js';
import { Handicrafts, Handlooms, FolkArts, CulturalEvents, VillageMuseums, Exhibitions, Tenders } from '../api/models/cms/genericcms.js';

function loadJson(filename) {
    const fpath = path.join(DUMP_DIR, filename);
    if (!fs.existsSync(fpath)) { console.log(`  ⚠️  Not found: ${filename}`); return null; }
    return JSON.parse(fs.readFileSync(fpath, 'utf8'));
}

async function importCollection(Model, data, label) {
    if (!data || !data.length) { console.log(`  ℹ️  ${label}: no data`); return; }
    await Model.deleteMany({});
    // strip mongoose-incompatible fields and re-insert preserving _id
    const docs = data.map(d => ({ ...d, __v: undefined }));
    await Model.insertMany(docs, { ordered: false }).catch(() => {});
    console.log(`  ✅ ${label}: ${docs.length} records imported`);
}

async function main() {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected.\n');

    const units = loadJson('unitmaster_getallunits.json');
    const activities = loadJson('activitymaster_getallactivities.json');
    const supercats = loadJson('supercategory_getallsupercategories.json');
    const subcats = loadJson('subcategory_getallsubcategories.json');
    const groups = loadJson('groups_getallgroups.json');
    const users = loadJson('users_getallusers.json');
    const notifs = loadJson('notifications_getnotificationbyunits.json');
    const aboutus = loadJson('cms_aboutus_getall.json');
    const handicrafts = loadJson('cms_handicrafts_getall.json');
    const handlooms = loadJson('cms_handlooms_getall.json');
    const folkarts = loadJson('cms_folkarts_getall.json');
    const culturalevents = loadJson('cms_culturalevents_getall.json');
    const villagemuseums = loadJson('cms_villagemuseums_getall.json');
    const exhibitions = loadJson('cms_exhibitions_getall.json');
    const tenders = loadJson('cms_tenders_getall.json');

    await importCollection(UnitMaster, units?.units, 'Units');
    await importCollection(ActivityMaster, activities?.activities, 'Activities');
    await importCollection(SuperCategory, supercats?.supercategories, 'Super Categories');
    await importCollection(SubCategory, subcats?.subcategories, 'Sub Categories');
    await importCollection(Group, groups?.groups, 'Groups');
    await importCollection(User, users?.users, 'Users');
    await importCollection(AbousUs, aboutus?.aboutus_list, 'About Us');
    await importCollection(Handicrafts, handicrafts?.handicrafts_list, 'Handicrafts');
    await importCollection(Handlooms, handlooms?.handlooms_list, 'Handlooms');
    await importCollection(FolkArts, folkarts?.folkarts_list, 'Folk Arts');
    await importCollection(CulturalEvents, culturalevents?.culturalevents_list, 'Cultural Events');
    await importCollection(VillageMuseums, villagemuseums?.villagemuseums_list, 'Village Museums');
    await importCollection(Exhibitions, exhibitions?.exhibitions_list, 'Exhibitions');
    await importCollection(Tenders, tenders?.tenders_list, 'Tenders');

    // Notifications — flatten from unitnotifications structure
    const allNotifs = [];
    (notifs?.unitnotifications || []).forEach(u => {
        (u.notifications || []).forEach(n => allNotifs.push({ ...n, unit_id: u.unit_id }));
    });
    await importCollection(Notification, allNotifs, 'Notifications');

    // POS Transactions — merge all unit files
    const txFiles = fs.readdirSync(DUMP_DIR).filter(f => f.startsWith('postransactions_') && f.endsWith('.json'));
    let allTx = [];
    for (const f of txFiles) {
        const d = loadJson(f);
        const orders = d?.filteredorders || [];
        allTx = allTx.concat(orders);
    }
    // Deduplicate by order_id
    const seen = new Set();
    const uniqueTx = allTx.filter(t => {
        if (seen.has(t.order_id)) return false;
        seen.add(t.order_id); return true;
    });
    await importCollection(PosTransactions, uniqueTx, `POS Transactions (${uniqueTx.length} unique)`);

    console.log('\n✅ Import complete!');
    await mongoose.disconnect();
}

main().catch(err => { console.error(err); process.exit(1); });
