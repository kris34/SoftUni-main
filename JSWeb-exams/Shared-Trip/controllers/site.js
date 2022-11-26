const siteController = require('express').Router();

siteController.get('/create', (req, res) => {
  res.render('trip-create', {
    title: 'Create Trip',
  });
});



module.exports = siteController;
