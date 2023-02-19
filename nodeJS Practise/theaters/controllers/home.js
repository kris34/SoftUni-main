const homeController = require('express').Router();

homeController.get('/', (req, res) => {
  res.render('user-home');
});

module.exports = homeController;
