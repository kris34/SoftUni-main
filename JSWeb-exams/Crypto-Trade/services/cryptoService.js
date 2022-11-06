const Crypto = require('../models/Crypto');

async function createCrypto(data) {
  return await Crypto.create(data);
}

async function getAllCrypto() {
  return await Crypto.find({}).lean();
}

async function findById(id) {
  await Crypto.findById(id).lean();
}


module.exports = {
  createCrypto,
  getAllCrypto,
};
