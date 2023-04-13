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

async function editGame(data, id) {
  const existing = await Game.findById(id);
  existing.platform = data.platform;
  existing.name = data.name;
  existing.imageUrl = data.imageUrl;
  existing.price = data.price;
  existing.genre = data.genre;
  existing.description = data.description;
  return existing.save();
}

async function deleteById(id){ 
    return await Game.findByIdAndDelete(id)
  }

module.exports = {
  publish,
  getAll,
  getOne,
  buy,
  editGame,
  deleteById
};
