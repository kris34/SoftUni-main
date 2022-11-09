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
  coin.bought.push(userId);
  return coin.save();
}

async function deleteCoin(id) {
  return Crypto.findByIdAndDelete(id);
}

async function updateCoin(id, data) {
  const existing = await Crypto.findById(id);
  existing.name = data.name;
  existing.imageUrl = data.imageUrl;
  existing.price = data.price;
  existing.description = data.description;
  existing.paymentMethod = data.paymentMethod;

  return existing.save();
}

module.exports = {
  createCrypto,
  getAllCrypto,
  findCoinById,
  buyCrypto,
  deleteCoin,
  updateCoin,
};
