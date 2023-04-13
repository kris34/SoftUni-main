const Game = require('../models/Game');

async function publish(data) {
  return await Game.create(data);
}

async function getAll() {
  return await Game.find({}).lean();
}

module.exports = {
  publish,
  getAll
};
