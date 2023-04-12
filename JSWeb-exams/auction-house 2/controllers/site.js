const { createItem } = require('../services/itemService');

const siteController = require('express').Router();

siteController.get('/publish', async (req, res) => {
  res.render('create');
});

siteController.post('/publish', async (req, res) => {

  res.redirect('/site/publish');
});
module.exports = siteController;
