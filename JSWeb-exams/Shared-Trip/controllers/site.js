const createTrip = require('../services/siteService');

const siteController = require('express').Router();

siteController.get('/create', (req, res) => {
  res.render('trip-create', {
    title: 'Create Trip',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    date: req.body.date,
    time: req.body.time,
    carImage: req.body.carImage,
    carBrand: req.body.carBrand,
    seats: req.body.seats,
    price: req.body.price,
    description: req.body.description,
    creator: req.user?._id?.toString(),
  };
  const trip = await createTrip(data);
  res.redirect('/');
});

module.exports = siteController;
