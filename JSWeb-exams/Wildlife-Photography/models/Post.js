const { Schema, model, Types } = require('mongoose');

const URL_PATTERN = /^https?:\/\/.+$/i;

const postSchema = new Schema({
  title: { type: String, required: true },
  keyword: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
    validate: {
      validator: (value) => {
        URL_PATTERN.test(value);
      },
      message: 'Invalid image url!',
    },
  },
  description: { type: String, required: true },
  author: { type: Types.ObjectId, ref: 'User' },
  votes: { type: [Types.ObjectId], ref: 'User', default: [] },
  rating: { type: Number, default: 0 },
});

const Post = model('Post', postSchema);

module.exports = Post;
