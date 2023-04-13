const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, 'Username cannot be less then 5 charakters!'],
  },
  email: {
    type: String,
    required: true,
    minlength: [10, 'Email cannot be less then 5 charakters!'],
  },
  hashedPassword: {
    type: String,
    required: true,
    minlength: [4, 'Password cannot be less then 4 charakters!'],
  },
});

const User = model('User', userSchema);

module.exports = User;
