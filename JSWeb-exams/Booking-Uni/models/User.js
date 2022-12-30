const { Schema, model, Types } = require('mongoose');

//TODO add user properties and validation according to assignment
const userSchema = new Schema({
  email: { type: String, required: true },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Username must be at least 3 charakters long!'],
  },
  hashedPassword: { type: String, required: true, minlength: [5, "Password cannot be shorter than 5 charakters!"] },
  booked: { type: [Types.ObjectId], ref: 'Hotel', default: [] },
  offered: { type: [Types.ObjectId], ref: 'Hotel', default: [] },
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
