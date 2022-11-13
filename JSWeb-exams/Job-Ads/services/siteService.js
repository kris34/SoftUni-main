const Ad = require('../models/Ad');
const User = require('../models/User');

async function createAd(data) {
  return await Ad.create(data);
}

async function getAll() {
  return await Ad.find({}).lean();
}

async function getOne(id) {
  return await Ad.findById(id).populate('author').lean();
}

async function adApply(userId, adId) {
  const ad = await Ad.findById(adId);
  ad.applied.push(userId);
  return ad.save();
}

async function getUser(id) {
  return await User.findById(id);
}

module.exports = {
  createAd,
  getAll,
  getOne,
  adApply,
  getUser,
};
