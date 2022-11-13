const { getAll } = require('../services/siteService');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
  const ads = (await getAll()).slice(-3);
  ads.map((ad) => (ad.count = ad.applied.length));

  //console.log(ads);
  res.render('home', {
    title: 'Home Page',
    ads,
  });
});

module.exports = homeController;
