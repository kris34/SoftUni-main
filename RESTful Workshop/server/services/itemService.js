const Item = require('../models/Item');

async function getAll() {
  return Item.find({});
}

async function getById(id) {
  return Item.findById(id);
}

async function create(item) {
  return Item.create(item);
}

async function update(id, item) {
  const existing = await Item.findById(id);

  existing.make = item.make;
  existing.model = item.model;
  existing.year = item.year;
  existing.description = item.description;
  existing.price = item.price;
  existing.img = item.img;
  existing.material = item.material;

  return existing.save();
}

async function deleteById(id) {
  return Item.findOneAndDelete(id);
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
