const Ad = require('../models/Ad');

async function createAd(data) {
  return await Ad.create(data);
}

module.exports = {
  createAd,
};
