const Painting = require('../models/Painting');

async function createPainting(data) {
  return await Painting.create(data);
}

async function getOne(id) {
  return await Painting.findById(id).populate('author').lean();
}

async function getAll() {
  return await Painting.find({}).lean();
}

module.exports = {
  createPainting,
  getOne,
  getAll,
};
