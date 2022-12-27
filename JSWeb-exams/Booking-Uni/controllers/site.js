const { isGuest } = require('../middlewares/guards');
const {
  createHotel,
  getOne,
  getUser,
  bookHotel,
} = require('../services/hotelService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', isGuest(), (req, res) => {
  res.render('create', {
    title: 'Create Page',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    name: req.body.name,
    city: req.body.city,
    freeRooms: req.body.freeRooms,
    imageUrl: req.body.imageUrl,
    owner: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    const user = await getUser(req.user?._id);
    const hotel = await createHotel(data);
    user.offered.push(hotel._id);
    user.save();

    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create Page',
      errors,
    });
  }
});

siteController.get('/:id/details', async (req, res) => {
  const hotel = await getOne(req.params.id);

  hotel.isOwner = hotel.owner._id.toString() == req.user?._id?.toString();
  hotel.isBooked = hotel.bookedUsers.some((v) => v == req.user._id);
 
  //console.log(hotel.bookedUsers.some((v) => v == req.user._id));

  res.render('details', {
    title: 'Details Page',
    hotel,
  });
});

siteController.get('/:id/book', async (req, res) => {
  try {
    await bookHotel(req.user?._id, req.params.id);

    res.redirect(`/site/${req.params.id}/details`);
  } catch (err) {
    const errors = parseError(err);
    console.log(errors);
  }
});

module.exports = siteController;
