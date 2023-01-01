const jwt = require('jsonwebtoken');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const secret = 'paworiuqah4wesfd';
const tokenBlacklist = new Set();

async function register(email, password) {
  const existing = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  if (existing) {
    throw new Error('Email is taken!');
  }

  const user = await User.create({
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });

  return createToken(user);
}

async function login(email, password) {
  const user = await User.findOne({ email }).collation({
    locale: 'en',
    strength: 2,
  });

  if (!user) {
    throw new Error('Incorrect email or password!');
  }

  const match = bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw new Error('Incorrect email or password');
  }

  return createToken(user);
}

async function logout(token) {
  tokenBlacklist.add(token);
  //TODO scan blaclist for token
}

function createToken(user) {
  const payload = {
    _id: user._id,
    email: user.email,
  };

  return {
    _id: user._id,
    email: user.email,
    accessToken: jwt.sign(payload, secret),
  };
}

function parseToken(token) {}

module.exports = {
  register,
  login,
  logout,
  parseToken,
};
