const dataController = require('express').Router();

dataController.get('/', (req, res) => {
  console.log(req.user);
  res.json([]);
});

module.exports = dataController;
