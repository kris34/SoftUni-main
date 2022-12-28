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

async function getUserHotels(idArr) {
  let result = [];

  for (let id of idArr) {
    let hotel = await Hotel.findById(id).lean();
    result.push(hotel.name);
  }

  return result.join(', ');
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

module.exports = {
  createHotel,
  getOne,
  getAll,
  bookHotel,
  getUser,
  getUserHotels,
};
