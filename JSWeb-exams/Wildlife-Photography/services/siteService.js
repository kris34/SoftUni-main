const Post = require('../models/Post');

async function createPost(data) {
  return await Post.create(data);
}

module.exports = { 
    createPost
}
