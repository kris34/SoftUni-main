const { Schema, model, Types } = require('mongoose');

const itemSchema = new Schema({
  make: {
    type: String,
    required: true,
    minLength: [3, 'Make must be at least 3 charakters long'],
  },
  model: {
    type: String,
    required: true,
    minLength: [3, 'Model must be at least 3 charakters long! '],
  },
  year: {
    type: Number,
    required: true,
    validate: {
      validator: (value) => value >= 1950 && value <= 2050,
      message: 'Year must be between 1950 and 2050',
    },
  },
  description: {
    type: String,
    required: true,
    minLength: [10, 'Description must be at least 10 charakters long!'],
  },
  price: {
    type: Number,
    required: true,
    min: [0.01, 'Price must be a positive number'],
  },
  img: { type: String, required: [true, 'Image is required!'] },
  material: { type: String, default: ' ' },
  _ownerId: { type: Types.ObjectId, ref: 'User', required: true },
});

const Item = model('Item', itemSchema);

module.exports = Item;
