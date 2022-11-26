const Trip = require('../models/Trip');

async function createTrip(data) {
   
  return  await Trip.create(data);
}

module.exports = createTrip