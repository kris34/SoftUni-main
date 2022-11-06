const { getAllCrypto } = require('../services/cryptoService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const coins = await getAllCrypto();

  res.render('home', {
    title: 'Home Page',
    coins,
  });
});

module.exports = homeController;
