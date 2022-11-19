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

async function getOne(id) {
  return await Post.findById(id).populate('author').lean();
}

async function upVote(postid, userid) {
  const post = await Post.findById(postid);
  post.rating++;
  post.votes.push(userid);
  return post.save();
}

async function downVote(postid, userid) {
  const post = await Post.findById(postid);
  post.rating--;
  post.votes.push(userid);
  return post.save();
}

async function getVoterEmails(idArray) {
  const votesArr = [];

  for (let id of idArray) {
    const user = await User.findById(id);
    votesArr.push(user.email);
  }
  
  let voteList = votesArr.join(", ")
  return voteList;
}

module.exports = {
  createPost,
  getAll,
  addPostToUser,
  getUserPosts,
  getOne,
  upVote,
  downVote,
  getVoterEmails
};
