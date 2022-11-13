const { getUser } = require('../services/siteService');

function parseError(error) {
  if (error.name == 'ValidationError') {
    return Object.values(error.errors).map((v) => v.message);
  }
  return error.message.split('\n');
}

async function parseUserId(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const user = await getUser(array[i]);
    newArray.push(user);
  }
  return newArray;
}
module.exports = {
  parseError,
  parseUserId,
};
