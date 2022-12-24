const { Types, model, Schema } = require('mongoose');

const hotelSchema = new Schema({
  name: { type: String, required: true, unique: true },
  city: { type: String, required: true },
  imageUrl: { type: String, required: true },
  freeRooms: { type: Number, required: true },
  bookedUsers: { type: [Types.ObjectId], ref: 'User', default: [] },
  owner: { type: Types.ObjectId, ref: 'User' },
});

const Hotel = new model('Hotel', hotelSchema);

module.exports = Hotel;
