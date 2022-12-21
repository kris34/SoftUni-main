const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const toySchema = new Schema({
  title: { type: String, required: true },
  charity: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  list: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Toy = model('Toy', toySchema);

module.exports = Toy;
