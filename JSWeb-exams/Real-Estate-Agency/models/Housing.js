const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const housingSchema = {
  name: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: String, required: true },
  city: { type: String, required: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  description: { type: String, required: true },
  availablePieces: { type: Number, required: true },
  rented: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
};

const Housing = model('Housing', housingSchema);

module.exports = Housing;
