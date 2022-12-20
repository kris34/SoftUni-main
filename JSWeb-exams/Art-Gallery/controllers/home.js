const { getAll } = require('../services/siteService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const paintings = await getAll();
  
  paintings.map((p) => (p.count = p.shared.length));

  res.render('home', {
    title: 'home',
    paintings,
  });
});

module.exports = homeController;
