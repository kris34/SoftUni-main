const { getAll } = require('../services/siteService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const posts = await getAll();

  res.render('home', {
    title: 'Home Page',
    posts,
  });
});

module.exports = homeController;
