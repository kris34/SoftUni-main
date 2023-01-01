const { register, login } = require('../services/userService');

const authController = require('express').Router();

authController.post('/register', async (req, res) => {
  try {
    const token = await register(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

authController.post('/login', async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
});

authController.get('/logout', async (req, res) => {
  const token = req.headers['X-authorization'];
  await logout(token);
  res.status(204).end();
});

module.exports = authController;
