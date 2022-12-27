const Hotel = require('../models/hotel');
const User = require('../models/User');

async function createHotel(data) {
  return await Hotel.create(data);
}

async function getOne(id) {
  return await Hotel.findById(id).populate('owner').lean();
}

async function getAll() {
  return await Hotel.find({}).populate('owner').lean();
}

async function bookHotel(userId, hotelId) {
  const hotel = await Hotel.findById(hotelId);
  const user = await User.findById(userId);
  console.log(user);
  user.booked.push(hotelId);
  hotel.bookedUsers.push(userId);

  return user.save(), hotel.save();
}

async function getUser(id) {
  return await User.findById(id);
}

module.exports = {
  createHotel,
  getOne,
  getAll,
  bookHotel,
  getUser,
};
