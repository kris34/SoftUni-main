const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const jwt_secret = 'qwer234asdfg34w2r';

async function register(email, username, password) {
  const existing = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });
  
  const existingUsername = await User.findOne({ username }).collation({
    locale: 'en',
    strength: 2,
  });

  if (existing) {
    throw new Error('Email is taken!');
  }

  if (existingUsername) {
    throw new Error('Username is taken!');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    email,
    username,
    hashedPassword,
  });

  //TODO see assignment if registration creates user Session

  return createSession(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  if (!user) {
    throw new Error('Incorrect email or password!');
  }
  const hasMatch = await bcrypt.compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error('Incorrect username or password!');
  }
  return createSession(user);
}

function verifyToken(token) {
  return jwt.verify(token, jwt_secret);
}

function createSession({ _id, email }) {
  const payload = {
    _id,
    email,
  };

  return jwt.sign(payload, jwt_secret);
}

module.exports = {
  register,
  login,
  verifyToken,
};
