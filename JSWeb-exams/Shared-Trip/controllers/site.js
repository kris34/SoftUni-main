const createTrip = require('../services/siteService');
const { parseError } = require('../util/parser');

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

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    if (Number(data.seats) < 0 || Number(data.seats) > 4) {
      throw new Error('Seats cannot be less then 0 or more then 4');
    }

    if (Number(data.price) < 0) {
      throw new Error('Price cannot be lower then $0');
    }

    await createTrip(data);
    
    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);
    res.render('trip-create', {
      title: 'Create',
      errors,
      data,
    });
  }
});

module.exports = siteController;
