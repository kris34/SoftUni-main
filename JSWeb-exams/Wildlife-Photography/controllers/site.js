const { hasUser } = require('../middlewares/guards');
const Post = require('../models/Post');
const User = require('../models/User');
const {
  createPost,
  getAll,
  addPostToUser,
  getUserPosts,
  getOne,
  upVote,
  downVote,
  getVoterEmails,
} = require('../services/siteService');
const { parseError } = require('../util/parser');

const siteController = require('express').Router();

siteController.get('/create', hasUser(), async (req, res) => {
  const posts = await getAll();

  res.render('create', {
    title: 'Create post',
  });
});

siteController.post('/create', hasUser(), async (req, res) => {
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

siteController.get('/myPosts', hasUser(), async (req, res) => {
  let myPosts = await getUserPosts(req.user?._id?.toString());
  let posts = [];

  for (let post of myPosts) {
    const x = await Post.findById(post).populate('author').lean();
    posts.push(x);
  }

  res.render('my-posts', {
    title: 'My Posts',
    posts,
  });
});

siteController.get('/catalog', async (req, res) => {
  const posts = await getAll();

  res.render('all-posts', {
    title: 'Catalog',
    posts,
  });
});

siteController.get('/details/:id', async (req, res) => {
  const post = await getOne(req.params.id);

  post.owner = req.user?._id?.toString() == post.author._id.toString();

  post.notVoted =
    post.votes.map((x) => x.toString()).includes(req.user?._id?.toString()) ==
    false;

  if (post.votes.length > 0) {
    post.hasVotes = true;
  }

  post.voteList = await getVoterEmails(post.votes);

  res.render('details', {
    title: 'Details',
    post,
  });
});

siteController.get('/details/:id/upvote', hasUser(), async (req, res) => {
  const post = await getOne(req.params.id);

  post.owner = req.user?._id?.toString() == post.author._id.toString();

  try {
    await upVote(req.params.id, req.user._id.toString());

    res.redirect(`/site/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    console.log(errors);
    res.render('details', {
      errors,
    });
  }
});

siteController.get('/details/:id/downvote', hasUser(), async (req, res) => {
  const post = await getOne(req.params.id);

  post.owner = req.user?._id?.toString() == post.author._id.toString();

  try {
    await downVote(req.params.id, req.user._id);
    res.redirect(`/site/details/${req.params.id}`);
  } catch (err) {
    const errors = parseError(err);
    console.log(errors);
  }
});

module.exports = siteController;
