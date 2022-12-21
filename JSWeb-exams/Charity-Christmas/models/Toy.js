const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const toySchema = new Schema({
  title: {
    type: String,
    required: true,
    minlength: [10, 'Title must be at least 10 charakters long!'],
  },
  charity: {
    type: String,
    required: true,
    minlength: [2, 'Charity must be at least 2 charakters long!'],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  description: {
    type: String,
    required: true,
    minlength: [10, 'Description must be at least 10 charakters long!'],
    maxlength: [100, 'Description cannot be longer then 100 charakters!'],
  },
  category: {
    type: String,
    required: true,
    minlength: [5, 'Category must be at least 5 charakters long!'],
  },
  price: { type: Number, required: true },
  list: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Toy = model('Toy', toySchema);

module.exports = Toy;
