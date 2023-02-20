const { Schema, model, Types } = require('mongoose');

const playSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: {
    type: String,
    required: true,
    maxLength: [50, 'Description cannot be longer then 50 charakters!'],
  },
  imageUrl: { type: String, required: true },
  isPublic: { type: Boolean, default: false },
  createdAt: { type: String, required: true },
  usersLiked: { type: [Types.ObjectId], ref: 'User', default: [] },
});

const Play = model('Play', playSchema);

module.exports = Play;
