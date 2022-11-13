const { Schema, model, Types } = require('mongoose');

const adSchema = new Schema({
  headline: { type: String, required: true },
  location: { type: String, required: true },
  companyName: { type: String, required: true },
  companyDescription: { type: String, required: true },
  author: { type: Types.ObjectId, ref: 'User' },
  applied: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Ad = model('Ad', adSchema);

module.exports = Ad;
