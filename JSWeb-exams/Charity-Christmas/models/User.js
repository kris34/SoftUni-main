const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [4, 'Username must be at least 3 charakters long!'],
  },
  email: {
    type: String,
    required: true,
    minlength: [10, 'Email should be at least 10 charakters long!'],
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: [4, 'Password must be at least 4 charakters long!'],
  },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
);

const User = model('User', userSchema);

module.exports = User;
