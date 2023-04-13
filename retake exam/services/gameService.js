const Game = require('../models/Game');

async function publish(data) {
  return await Game.create(data);
}


module.exports = { 
    publish
}