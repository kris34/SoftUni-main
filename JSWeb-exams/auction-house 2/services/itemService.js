const item = require('../models/item');

async function createItem(data) {
  return await item.create(data);
}

module.exports = {
  createItem,
};
