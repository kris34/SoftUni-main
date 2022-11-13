const {
  createAd,
  getAll,
  getOne,
  adApply,
  getUser,
} = require('../services/siteService');
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
    author: req.user._id,
  };

  const user = await getUser(req.user._id);

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields are required!');
    }

    const ad = await createAd(data);
    user.myAds.push(ad._id);
    user.save();

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

  if (ad.applied.map((x) => x.toString()).includes(req.user?._id?.toString()) == false) {
    ad.notApplied = true;
  }

  res.render('details', {
    title: 'Job Details',
    ad,
  });
});

siteController.get('/:id/apply', async (req, res) => {
  const ad = await getOne(req.params.id);

  try {
    if (ad.author._id == req.user._id) {
      throw new Error('Cannot apply to your own job listing!');
    }

    await adApply(req.user._id, req.params.id);

    res.redirect(`/site/catalog/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    res.render('details', {
      title: 'catalog',
      errors,
    });
  }
});

module.exports = siteController;
