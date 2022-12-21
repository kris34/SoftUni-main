const Toy = require('../models/Toy');

async function createToy(data) {
  return await Toy.create(data);
}

async function getToy(id) {
  return await Toy.findById(id).populate('owner').lean();
}

async function getAll() {
  return await Toy.find({}).lean();
}

module.exports = {
  createToy,
  getAll,
  getToy,
};
