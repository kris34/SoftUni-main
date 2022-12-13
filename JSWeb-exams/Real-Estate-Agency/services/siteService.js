const Housing = require('../models/Housing');

async function createHousing(data) {
  return await Housing.create(data);
}

module.exports = {
  createHousing,
};
