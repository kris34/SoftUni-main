const Game = require('../models/Game');

async function publish(data) {
  return await Game.create(data);
}

async function getAll() {
  return await Game.find({}).lean();
}

async function getOne(id) {
  return await Game.findById(id).populate('owner').lean();
}

async function buy(gameId, userId) {
  const existing = await Game.findById(gameId);
  existing.boughtBy.push(userId);
  return existing.save();
}

module.exports = {
  publish,
  getAll,
  getOne,
  buy
};
