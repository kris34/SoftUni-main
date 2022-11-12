const Auction = require('../models/auction');
const User = require('../models/User');

async function createAuction(data) {
  return await Auction.create(data);
}

async function getAll() {
  return await Auction.find({}).lean();
}

async function getOne(id) {
  return await Auction.findById(id).populate('owner').lean();
}

async function bid(newBid, itemId, userId) {
  const existing = await Auction.findById(itemId);
  existing.price = newBid;
  existing.bidders.push(userId);
  return existing.save();
}

async function getUser(id) {
  return await User.findById(id).lean();
}

module.exports = {
  createAuction,
  getAll,
  getOne,
  bid,
  getUser
};
