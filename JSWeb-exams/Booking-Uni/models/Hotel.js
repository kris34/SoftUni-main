const { Types, model, Schema } = require('mongoose');
const validator = require('validator');

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [4, 'Hotel name cannot be shorter then 4 charakters!'],
  },
  city: {
    type: String,
    required: true,
    minLength: [3, 'City cannot be shorter then 3 charakters!'],
  },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => URL_PATTERN.test(value),
      message: 'Image not valid',
    },
  },
  freeRooms: { type: Number, required: true },
  bookedUsers: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Hotel = new model('Hotel', hotelSchema);

module.exports = Hotel;


