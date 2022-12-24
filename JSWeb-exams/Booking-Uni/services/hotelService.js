const Hotel = require('../models/hotel');

async function createHotel(data) {
  return await Hotel.create(data);
}

module.exports = {
  createHotel,
};
