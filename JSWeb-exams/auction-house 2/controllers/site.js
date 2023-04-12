const { createItem, getAll } = require('../services/itemService');
const { parseError } = require('../util/parser');

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

  try {
    if (Object.values(req.body).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    if (Number(req.body.price) < 1) {
      throw new Error('Price cannot be negative!');
    }

    const published = await createItem(item);

    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);

    res.render('create', {
      title: 'Create',
      errors,
      user: req.user,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const items = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    items,
  });
});
module.exports = siteController;
