const Housing = require('../models/Housing');
const User = require('../models/User');

async function createHousing(data) {
  return await Housing.create(data);
}

async function getAll() {
  return await Housing.find({}).populate('owner').lean();
}

async function getOne(id) {
  return await Housing.findById(id).lean();
}

async function rent(id, userId) {
  const housing = await Housing.findById(id);
  housing.rented.push(userId);
  housing.availablePieces--;
  return housing.save();
}

async function getUsernames(arr) {
  let usernames = [];
  arr.map((e) => e.toString());
  for (let el of arr) {
    const user = await User.findById(el);
    usernames.push(user.username);
  }

  return usernames;
}

module.exports = {
  createHousing,
  getAll,
  getOne,
  rent,
  getUsernames
};
