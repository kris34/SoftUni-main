const Painting = require('../models/Painting');
const User = require('../models/User');

async function createPainting(data) {
  return await Painting.create(data);
}

async function getOne(id) {
  return await Painting.findById(id).populate('author').lean();
}

async function getAll() {
  return await Painting.find({}).lean();
}

async function sharePost(userId, postId) {
  const painting = await Painting.findById(postId);
  painting.shared.push(userId);
  return painting.save();
}

async function addPostToUser(userId, postId) {
  const user = await User.findById(userId);
  user.myPublications.push(postId);
  return user.save();
}

async function getUserPosts(userId) {
  const user = await User.findById(userId);
  let titlesArr = [];
  for (let el of user.myPublications) {
    const post = await Painting.findById(el);
    titlesArr.push(post.title);
  }

  return titlesArr.join(', ');
}

async function getSharedPosts(userId) {
  const posts = await getAll();
  let idArr = [];

  for (let post of posts) {
    post.shared.forEach((u) => (u == userId ? idArr.push(post._id) : ''));
  }

  let result = [];

  for (let id of idArr) {
    let post = await getOne(id);
    result.push(post.title);
  }

  return result.join(', ');
}

module.exports = {
  createPainting,
  getOne,
  getAll,
  sharePost,
  addPostToUser,
  getUserPosts,
  getSharedPosts,
};
