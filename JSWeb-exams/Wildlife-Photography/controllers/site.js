const { createPost, getAll } = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', async (req, res) => {
  const posts = await getAll();

  res.render('create', {
    title: 'Create post',
    
  });
});

siteController.post('/create', async (req, res) => {
  const post = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    author: req.user._id,
  };

  try {
    if (Object.values(post).some((v) => !v) == true) {
      throw new Error('All fields required!');
    }

    await createPost(post);

    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);

    res.render('create', {
      title: 'Create',
      post,
      errors,
    });
  }
});

module.exports = siteController;
