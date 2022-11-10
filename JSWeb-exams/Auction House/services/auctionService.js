const Auction = require('../models/auction');

async function createAuction(data) {
  return await Auction.create(data);
}

module.exports = createAuction;
