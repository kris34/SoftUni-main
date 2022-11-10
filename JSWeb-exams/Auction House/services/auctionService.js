const Auction = require('../models/auction');

async function createAuction(data) {
  return await Auction.create(data);
}

async function getAll() {
  return await Auction.find({}).lean();
}

module.exports = {
  createAuction,
  getAll,
};
