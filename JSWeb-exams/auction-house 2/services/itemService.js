const item = require('../models/item');

async function createItem(data) {
  return await item.create(data);
}

async function getAll() {
  return await item.find({}).lean();
}

module.exports = {
  createItem,
  getAll
};
