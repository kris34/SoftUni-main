const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
});

const User = model('User', userSchema);

module.exports = User;
