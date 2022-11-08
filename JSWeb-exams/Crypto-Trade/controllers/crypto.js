const {
  createCrypto,
  getAllCrypto,
  findCoinById,
  buyCrypto,
} = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const cryptoController = require('express').Router();

cryptoController.get('/catalog', async (req, res) => {
  try {
    const coins = await getAllCrypto();
    res.render('catalog', {
      title: 'Catalog Page',
      coins,
    });
  } catch (err) {
    res.render('home', {
      title: 'Home Page',
      user: req.user,
      errors: parseError(err),
    });
  }
});

cryptoController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create',
    user: req.user,
  });
});

cryptoController.post('/create', async (req, res) => {
  const crypto = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    description: req.body.description,
    paymentMethod: req.body.paymentMethod,
    owner: req.user._id,
  };

  try {
    if (Object.values(crypto).some((v) => !v)) {
      throw new Error('All fields are required!');
    }

    await createCrypto(crypto);

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

cryptoController.get('/details/:id', async (req, res) => {
  const coin = await findCoinById(req.params.id);

  coin.isOwner = coin.owner.toString() == req.user?._id?.toString();

  coin.bought = coin.bought
    .map((x) => x.toString())
    .includes(req.user?._id.toString());

  res.render('details', {
    title: 'Coin Details',
    user: req.user,
    coin,
  });
});

cryptoController.get('/buy/:id', async (req, res) => {
  const coin = await findCoinById(req.params.id);

  if (
    coin.owner.toString() != req.user?._id?.toString() &&
    coin.bought.map((x) => x.toString()).includes(req.user?._id?.toString()) ==
      false
  ) {
    try {
      await buyCrypto(req.user._id, req.params.id);
      res.redirect(`/crypto/details/${req.params.id}`);
    } catch (err) {
      res.render('catalog', {
        errors: parseError(err),
        coin,
      });
    }
  } 
});

module.exports = cryptoController;
