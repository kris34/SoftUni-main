const Housing = require('../models/Housing');

async function createHousing(data) {
  return await Housing.create(data);
}

async function getAll() {
  return await Housing.find({}).populate('owner').lean();
}

async function getOne(id) {
  return await Housing.findById(id).lean();
}

async function rent(id, userId) {
  const housing = await Housing.findById(id);
  housing.rented.push(userId);
  housing.availablePieces--;
  return  housing.save();
}

module.exports = {
  createHousing,
  getAll,
  getOne,
  rent,
};
