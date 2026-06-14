import mongoose from 'mongoose';

// Generic CMS page model — used for handicrafts, handlooms, folkarts,
// culturalevents, villagemuseums, exhibitions, tenders
function buildCmsModel(name) {
    const schema = new mongoose.Schema({
        status: { type: String, default: '1' },
        internal_status: { type: String, default: '1' },
        created_date: { type: String, default: () => new Date().toUTCString() },
    }, { strict: false });
    return mongoose.model(name, schema);
}

export const Handicrafts = buildCmsModel('Handicrafts');
export const Handlooms = buildCmsModel('Handlooms');
export const FolkArts = buildCmsModel('FolkArts');
export const CulturalEvents = buildCmsModel('CulturalEvents');
export const VillageMuseums = buildCmsModel('VillageMuseums');
export const Exhibitions = buildCmsModel('Exhibitions');
export const Tenders = buildCmsModel('Tenders');
