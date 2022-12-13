const { createHousing } = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/create', async (req, res) => {
  const housing = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    image: req.body.image,
    description: req.body.description,
    availablePieces: req.body.availablePieces,
  };
  try {
    if (Object.values(housing).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    await createHousing(housing);

    res.redirect('/site/catalog');
    
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create',
      errors,
    });
  }
});

module.exports = siteController;
