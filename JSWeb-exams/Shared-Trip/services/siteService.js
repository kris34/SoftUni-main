const Trip = require('../models/Trip');

async function createTrip(data) {
  return await Trip.create(data);
}

async function getAllTrips() {
  return await Trip.find({}).lean();
}

module.exports = {
  createTrip,
  getAllTrips,
};
