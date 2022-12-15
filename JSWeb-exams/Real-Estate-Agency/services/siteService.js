const Housing = require('../models/Housing');

async function createHousing(data) {
  return await Housing.create(data);
}

async function getAll() {
  return await Housing.find({}).populate('owner').lean();
}

async function getOne(id) {
  return await Housing.findById(id).populate('owner').lean();
}

module.exports = {
  createHousing,
  getAll,
  getOne,
};
