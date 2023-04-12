const { createItem } = require('../services/itemService');

const siteController = require('express').Router();

siteController.get('/publish', async (req, res) => {
  res.render('create');
});

siteController.post('/publish', async (req, res) => {
  const item = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    author: req.user._id,
  };
  const published = await createItem(item);

  res.redirect('/site/publish');
});
module.exports = siteController;
