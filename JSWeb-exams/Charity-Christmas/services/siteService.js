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

async function buyToy(userId, toyId) {
  const toy = await Toy.findById(toyId);
  toy.list.push(userId);
  toy.save();
}

async function editToy(data, id) {
  const existing = await Toy.findById(id);

  existing.title = data.title;
  existing.charity = data.charity;
  existing.price = data.price;
  existing.description = data.description;
  existing.category = data.category;

  existing.save();
}

module.exports = {
  createToy,
  getAll,
  getToy,
  buyToy,
  editToy,
};
