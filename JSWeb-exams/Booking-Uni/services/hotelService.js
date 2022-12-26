const Hotel = require('../models/hotel');

async function createHotel(data) {
  return await Hotel.create(data);
}

async function getOne(id) {
  return await Hotel.findById(id).populate('owner').lean();
}

async function getAll() {
  return await Hotel.find({}).populate('owner').lean();
}



module.exports = {
  createHotel,
  getOne,
  getAll,
};
