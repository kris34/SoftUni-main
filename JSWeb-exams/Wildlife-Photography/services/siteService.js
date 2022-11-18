const Post = require('../models/Post');
const User = require('../models/User');

async function createPost(data) {
  return await Post.create(data);
}

async function getAll() {
  return await Post.find({}).lean();
}

async function addPostToUser(userId, postId) {
  const user = await User.findById(userId);
  user.myPosts.push(postId);
  return user.save();
}

async function getUserPosts(userId) {
  const user = await User.findById(userId);
  let posts = user.myPosts.map((x) => x.toString());

  return posts;
}

module.exports = {
  createPost,
  getAll,
  addPostToUser,
  getUserPosts,
};
