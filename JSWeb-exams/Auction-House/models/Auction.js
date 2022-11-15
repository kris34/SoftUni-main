const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const auctionSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  price: { type: Number, required: true },
  owner: { type: Types.ObjectId, ref: 'User' },
  bidders: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Auction = model('Auction', auctionSchema);

module.exports = Auction;
