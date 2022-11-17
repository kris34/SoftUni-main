const Post = require('../models/Post');

async function createPost(data) {
  return await Post.create(data);
}

async function getAll() {
  return await Post.find({}).lean();
}

module.exports = {
  createPost,
  getAll,
};
