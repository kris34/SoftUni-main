const Crypto = require('../models/Crypto');

async function createCrypto(data) {
  return await Crypto.create(data);
}

async function getAllCrypto() {
  return await Crypto.find({}).lean();
}

async function findCoinById(id) {
  return await Crypto.findById(id).lean();
}

async function buyCrypto(){ 
  
}

module.exports = {
  createCrypto,
  getAllCrypto,
  findCoinById,
};
