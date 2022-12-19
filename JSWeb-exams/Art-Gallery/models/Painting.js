const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const paintingSchema = new Schema({
  title: { type: String, required: true },
  technique: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  certificate: { type: String, required: true },
  author: { type: Types.ObjectId, ref: 'User' },
  shared: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Painting = new model('Painting', paintingSchema);

module.exports = Painting;
