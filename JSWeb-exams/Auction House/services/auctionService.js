const Auction = require('../models/auction');

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

module.exports = {
  createAuction,
  getAll,
  getOne,
  bid,
};
