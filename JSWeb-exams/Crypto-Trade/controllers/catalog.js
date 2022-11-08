const { getAllCrypto, findCoinById } = require('../services/cryptoService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
  const coins = await getAllCrypto();

  res.render('catalog', {
    title: 'Catalog',
    coins,
  });
});

catalogController.get('/details/:id', async (req, res) => {
  const coin = await findCoinById(req.params.id);

  if (res.locals.username && coin.owner == req.user._id) {
    coin.isOwner = true;
  }

  res.render('details', {
    title: 'Details',
    coin,
  });
});

module.exports = catalogController;
