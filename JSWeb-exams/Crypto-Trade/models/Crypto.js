const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid!',
    },
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  bought: {
    type: [Types.ObjectId],
    ref: 'User',
    default: [],
  },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;
