const { isGuest } = require('../middlewares/guards');
const { createHousing, getAll, getOne } = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', isGuest(), (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/create', isGuest(), async (req, res) => {
  const housing = {
    name: req.body.name,
    type: req.body.type,
    year: req.body.year,
    city: req.body.city,
    image: req.body.image,
    description: req.body.description,
    availablePieces: req.body.availablePieces,
    owner: req.user?._id,
  };
  try {
    if (Object.values(housing).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    await createHousing(housing);

    res.redirect('/site/create');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create',
      housing,
      errors,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const housings = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    housings,
  });
});

siteController.get('/:id/details', async (req, res) => {
  const housing = await getOne(req.params.id);

  res.render('details', {
    title: 'Details',
    housing,
  });

  //res.redirect(`/site/catalog`);
});

module.exports = siteController;
