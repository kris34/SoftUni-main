const { hasUser } = require('../middlewares/guards');
const { publish, getAll } = require('../services/gameService');
const { parseError } = require('../util/parser');
const siteController = require('express').Router();

siteController.get('/publish', hasUser(), async (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/publish', async (req, res) => {
  const data = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
    genre: req.body.genre,
    platform: req.body.platform,
    owner: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    if (Number(req.body.price) < 0) {
      throw new Error('Price cannot be below $0.');
    }

    const game = await publish(data);
    //  console.log(game);

    res.redirect('/site/catalog');
  } catch (err) {
    const errors = parseError(err);

    res.render('create', {
      title: 'Create',
      errors,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const games = await getAll();
  res.render('catalog', {
    title: 'Catalog',
    games
  });
});

module.exports = siteController;
