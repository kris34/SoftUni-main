const Trip = require('../models/Trip');
const User = require('../models/User');

async function createTrip(data) {
  return await Trip.create(data);
}

async function getAllTrips() {
  return await Trip.find({}).lean();
}

async function getTrip(id) {
  return await Trip.findById(id).populate('creator').lean();
}

async function getUser(id) {
  return await User.findById(id);
}

async function updateUser(id, data) {
  const existing = await User.findById(id);
  existing.trips.push(data);
  return existing.save();
}

async function joinTrip(tripId, userId) {
  const trip = await Trip.findById(tripId);
  trip.buddies.push(userId);
  trip.seats--; 
  return trip.save();
}

module.exports = {
  createTrip,
  getAllTrips,
  getTrip,
  getUser,
  updateUser,
  joinTrip,
};
