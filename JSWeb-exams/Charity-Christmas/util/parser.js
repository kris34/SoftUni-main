function parseError(error) {
  if (error.name == 'ValidationError') {
    return Object.values(error.errors).map((v) => v.message);
  }
  return error.message.split('\n');
}

module.exports = {
  parseError,
};
