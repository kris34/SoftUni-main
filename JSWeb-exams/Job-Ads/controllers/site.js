const { createAd, getAll, getOne } = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', async (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    headline: req.body.headline,
    location: req.body.location,
    companyName: req.body.companyName,
    companyDescription: req.body.companyDescription,
    author: req.user?._id?.toString(),
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields are required!');
    }

    await createAd(data);
    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);
    res.render('create', {
      title: 'Create',
      errors,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const allAds = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    allAds,
  });
});

siteController.get('/catalog/details/:id', async (req, res) => {
  const ad = await getOne(req.params.id);

  ad.owner = ad.author._id.toString() == req.user?._id?.toString();
  ad.count = ad.applied.length;

  res.render('details', {
    title: 'Job Details',
    ad,
  });
});

module.exports = siteController;
