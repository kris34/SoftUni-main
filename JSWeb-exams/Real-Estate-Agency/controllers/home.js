const { getAll } = require('../services/siteService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const housings = await getAll();
  
  res.render('home', {
    title: 'Home Page',
    housings,
  });
});

module.exports = homeController;
