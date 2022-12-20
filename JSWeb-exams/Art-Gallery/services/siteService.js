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

module.exports = {
  createPainting,
  getOne,
  getAll,
  sharePost,
  addPostToUser
};
