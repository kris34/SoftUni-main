const Post = require('../models/Post');
const User = require('../models/User');
const {
  createPost,
  getAll,
  addPostToUser,
  getUserPosts,
} = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', async (req, res) => {
  const posts = await getAll();

  res.render('create', {
    title: 'Create post',
  });
});

siteController.post('/create', async (req, res) => {
  const data = {
    title: req.body.title,
    keyword: req.body.keyword,
    location: req.body.location,
    date: req.body.date,
    imageUrl: req.body.imageUrl,
    description: req.body.description,
    author: req.user._id,
  };

  try {
    if (Object.values(data).some((v) => !v) == true) {
      throw new Error('All fields required!');
    }

    const post = await createPost(data);
    //console.log(post._id.toString());

    await addPostToUser(req.user._id, post._id.toString());

    res.redirect('/');
  } catch (err) {
    const errors = parseError(err);

    res.render('create', {
      title: 'Create',
      data,
      errors,
    });
  }
});

siteController.get('/myPosts', async (req, res) => {
  let myPosts = await getUserPosts(req.user?._id?.toString());
  let posts = [];

  for (let post of myPosts) {
    const x = await Post.findById(post).populate("author").lean();
    posts.push(x);
  }

  res.render('my-posts', {
    title: 'My Posts',
    posts,
  });
});
module.exports = siteController;
