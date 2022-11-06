const { getAllCrypto } = require('../services/cryptoService');

const catalogController = require('express').Router();

catalogController.get('/', async (req, res) => {
  const coins = await getAllCrypto();
  console.log(coins);
  
  res.render('catalog', {
    title: 'Catalog',
    coins,
  });
});

module.exports = catalogController;
