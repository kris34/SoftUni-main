const createAuction = require('../services/auctionService');
const { parseError } = require('../util/parser');
const authController = require('./auth');

const auctionsController = require('express').Router();

auctionsController.get('/create', async (req, res) => {
  res.render('create', {
    title: 'Create auction',
    user: req.user,
  });
});

auctionsController.post('/create', async (req, res) => {
  const auction = {
    title: req.body.title,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
    owner: req.user._id,
  };
  
  try {
    if (req.body.price < 0) {
      throw new Error('Price cannot be below $0');
    }

    await createAuction(auction);

    res.redirect('/auctions/create');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create',
      errors,
      user: req.user,
    });
  }
});

module.exports = auctionsController;
