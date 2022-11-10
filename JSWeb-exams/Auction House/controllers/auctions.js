const auctionsController = require('express').Router();

auctionsController.get('/create', async (req, res) => {
  res.render('create', {
    title: 'Create auction',
    user: req.user,
  });
});

module.exports = auctionsController;
