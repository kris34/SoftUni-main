const siteController = require('express').Router;

siteController.get('create', (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});
