const { Schema, Types, model } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const gameSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  boughtBy: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Game = model('Game', gameSchema);

module.exports = Game;
