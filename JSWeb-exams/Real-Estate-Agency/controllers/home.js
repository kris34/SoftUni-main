const { getAll } = require('../services/siteService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const housings = await getAll();

  let topHouses = housings.slice(-3).reverse();

  res.render('home', {
    title: 'Home Page',

    topHouses,
  });
});

module.exports = homeController;
