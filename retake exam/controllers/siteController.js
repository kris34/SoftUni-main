const { hasUser } = require('../middlewares/guards');
const {
  publish,
  getAll,
  getOne,
  buy,
  editGame,
  deleteById,
} = require('../services/gameService');
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
    games,
  });
});

siteController.get('/details/:id', async (req, res) => {
  const game = await getOne(req.params.id);
  game.author = game.owner?._id == req.user?._id;

  game.hasBought = game.boughtBy.some((id) => id == req.user?._id.toString());

  res.render('details', {
    title: 'details',
    game,
  });
});

siteController.get('/details/:id/buy', async (req, res) => {
  const game = await getOne(req.params.id);
  const games = await getAll();

  try {
    if (game.owner._id == req.user?._id) {
      throw new Error('You cannot buy your own game!');
    }

    if (game.boughtBy.some((id) => id == req.user?._id)) {
      throw new Error('You have already bought this game!');
    }

    await buy(req.params.id, req.user._id);

    res.redirect(`/site/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);

    res.render('catalog', {
      games,
      errors,
    });
  }
});

siteController.get('/:id/edit', hasUser(), async (req, res) => {
  const game = await getOne(req.params.id);

  if (game.owner._id != req.user?._id) {
    res.redirect(`/site/details/${req.params.id}`);
  }

  res.render('edit', {
    title: 'Edit',
    game,
  });
});

siteController.post('/:id/edit', async (req, res) => {
  const game = await getOne(req.params.id);
  const data = req.body;

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    const newGame = await editGame(data, req.params.id);
    res.redirect(`/site/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);

    res.render('edit', {
      title: 'Edit',
      errors,
    });
  }
});

siteController.get('/delete/:id', hasUser(), async (req, res) => {
  const game = await getOne(req.params?.id);

  try {
    if (game.owner._id != req.user?._id) {
      throw new Error('cannot delete');
    }

    await deleteById(req.params?.id);
    res.redirect('/site/catalog');
  } catch (err) {
    const errors = parseError(err);
    res.render('catalog', {
      title: 'catalog',
      errors,
    });
  }
});

module.exports = siteController;
