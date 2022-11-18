const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: { type: String, required: true },
  myPosts: { type: [Types.ObjectId], ref: 'Post', default: [] },
});



const User = model('User', userSchema);

module.exports = User;
