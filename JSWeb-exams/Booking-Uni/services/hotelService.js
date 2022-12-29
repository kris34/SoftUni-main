const Hotel = require('../models/hotel');
const User = require('../models/User');

async function createHotel(data, userID) {
  const user = await User.findById(userID);
  const hotel = await Hotel.create(data);
  user.offered.push(hotel._id);

  return user.save();
}

async function getOne(id) {
  return await Hotel.findById(id).populate('owner').lean();
}

async function getUserBookings(id) {
  return await Hotel.find({ bookedUsers: id }).lean();
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
  hotel.freeRooms--;

  return user.save(), hotel.save();
}

async function getUser(id) {
  return await User.findById(id).lean();
}

async function updateHotel(data, id) {
  const hotel = await Hotel.findById(id);

  hotel.name = data.name;
  hotel.city = data.city;
  hotel.imageUrl = data.imageUrl;
  hotel.freeRooms = data.freeRooms;

  return hotel.save();
}

module.exports = {
  createHotel,
  getOne,
  getAll,
  bookHotel,
  getUser,
  getUserBookings,
  updateHotel
};
