const { isGuest } = require('../middlewares/guards');
const User = require('../models/User');
const {
  createPainting,
  getAll,
  getOne,
  sharePost,
  addPostToUser,
  getUserPosts,
  getSharedPosts,
} = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', isGuest(), (req, res) => {
  res.render('create', {
    title: 'Create',
  });
});

siteController.post('/create', isGuest(), async (req, res) => {
  const data = {
    title: req.body.title,
    technique: req.body.technique,
    imageUrl: req.body.imageUrl,
    certificate: req.body.certificate,
    author: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v)) {
      throw new Error('All fields required!');
    }

    if (data.certificate != 'Yes' && data.certificate != 'No') {
      throw new Error('Certificate can only be Yes or No!');
    }

    const painting = await createPainting(data);
    await addPostToUser(req.user._id, painting._id);

    res.redirect('/site/catalog');
  } catch (err) {
    const errors = parseError(err);
    console.log(errors);
    res.render('create', {
      title: 'Create',
      errors,
    });
  }
});

siteController.get('/catalog', async (req, res) => {
  const paintings = await getAll();

  res.render('catalog', {
    title: 'Catalog',
    paintings,
  });
});

siteController.get('/:id/details', async (req, res) => {
  const painting = await getOne(req.params.id);

  painting.owner = req.user?._id.toString() == painting.author._id.toString();
  painting.notShared =
    painting.shared.map((id) => id.toString()).includes(req.user?._id) == false;

  res.render('details', {
    title: 'Painting Details',
    painting,
  });
});

siteController.get('/:id/share', isGuest(), async (req, res) => {
  await sharePost(req.user._id, req.params.id);
  res.redirect(`/site/${req.params.id}/details`);
});

siteController.get('/profile', async (req, res) => {
  const user = await User.findById(req.user._id).lean();

  user.sharedPosts = await getSharedPosts(req.user._id);
  console.log(user.sharedPosts);
  user.createdPosts = await getUserPosts(user._id);

  res.render('profile', {
    title: 'Profile',
    user,
  });
});

module.exports = siteController;
