const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    title: req.body.title,
    technique: req.body.technique,
    imageUrl: req.body.imageUrl,
    certificate: req.body.certificate,
    author: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }
  } catch (err) {
    const errors = parseError(err);
    console.log(errors);
    res.render('create', {
      title: 'Create',
      errors,
    });
  }
});

module.exports = siteController;
