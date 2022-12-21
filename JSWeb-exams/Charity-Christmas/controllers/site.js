const { isGuest } = require('../middlewares/guards');
const { createToy, getAll, getToy } = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', isGuest(), (req, res) => {
  res.render('create', {
    title: 'Create Page',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    title: req.body.title,
    charity: req.body.charity,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    owner: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    if (Number(data.price) < 0) {
      throw new Error('Price cannot be negative!');
    }
    const toy = await createToy(data);

    res.redirect('/site/catalog');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create Page',
      errors,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const toys = await getAll();

  res.render('catalog', {
    title: 'Catalog Page',
    toys,
  });
});

siteController.get('/:id/details', async (req, res) => {
  const toy = await getToy(req.params.id);

  res.render('details', {
    title: 'Details Page',
    toy,
  });
});

module.exports = siteController;