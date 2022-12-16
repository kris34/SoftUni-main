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

async function deleteById(id) {
  return await Housing.findByIdAndDelete(id);
}

async function editHousing(data, id) {
  let housing = await Housing.findById(id);

  housing.name = data.name;
  housing.city = data.city;
  housing.type = data.type;
  housing.year = data.year;
  housing.image = data.image;
  housing.description = data.description;
  housing.availablePieces = data.availablePieces;

  return housing.save();
}

module.exports = {
  createHousing,
  getAll,
  getOne,
  rent,
  getUsernames,
  deleteById,
  editHousing,
};
