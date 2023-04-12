const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  email: { type: String, required: true },
  firstName: {
    type: String,
    required: true,
    minLength: [1, 'First name cannot be shorter then 1 charakter'],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [1, 'Last name cannot be shorter then 1 charakter'],
  },
  hashedPassword: { type: String, required: true },
});

/* userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: 'en',
      strength: 2,
    },
  }
); */

const User = model('User', userSchema);

module.exports = User;
