const Ad = require('../models/Ad');

async function createAd(data) {
  return await Ad.create(data);
}

async function getAll() {
  return await Ad.find({}).lean();
}



module.exports = {
  createAd,
  getAll
};
