const Hotel = require('../models/hotel');

async function createHotel(data) {
  return await Hotel.create(data);
}

async function getOne(id) {
  return await Hotel.findById(id).populate('owner').lean();
}

async func

module.exports = {
  createHotel,
};
