const Crypto = require('../models/Crypto');
const User = require('../models/User');

async function createCrypto(data) {
  return await Crypto.create(data);
}

async function getAllCrypto() {
  return await Crypto.find({}).lean();
}

async function findCoinById(id) {
  return await Crypto.findById(id).lean();
}

async function buyCrypto(userId, coinId) {
  const coin = await Crypto.findById(coinId);
  const user = await User.findById(userId);
  user.boughtCoins.push(coinId);
  coin.bought.push(userId);

  return coin.save() && user.save();
}

module.exports = {
  createCrypto,
  getAllCrypto,
  findCoinById,
  buyCrypto,
};
