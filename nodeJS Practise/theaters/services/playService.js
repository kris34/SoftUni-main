const Play = require('../models/Play');

async function createPlay(data) {
  return await Play.create(data);
}

async function getAllByDate() {
  return await Play.find().sort({ createdAt: 1 }).lean();
}

module.exports = {
  createPlay,
  getAllByDate,
};
