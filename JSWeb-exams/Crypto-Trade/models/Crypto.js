const { Schema, model, Types } = require('mongoose');

const cryptoSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: string,
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

const crypto = model('Crypto', cryptoSchema);

module.exports = crypto;
