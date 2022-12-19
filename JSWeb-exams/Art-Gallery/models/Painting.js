const { Schema, model, Types } = require('mongoose');

const paintingSchema = new Schema({
  title: { type: String, required: true },
  technique: { type: String, required: true },
  imageUrl: { type: String, required: true },
  certificate: { type: String, required: true },
  author: { type: Types.ObjectId, ref: 'User' },
  shared: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Painting = new model('Painting', paintingSchema);

module.exports = Painting;
