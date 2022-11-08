const { createCrypto } = require('../services/cryptoService');
const { parseError } = require('../util/parser');

const cryptoController = require('express').Router();

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

module.exports = cryptoController;
