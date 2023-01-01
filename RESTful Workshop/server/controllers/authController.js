const { register, login, logout } = require('../services/userService');
const { body, validationResult } = require('express-validator');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.post(
  '/register',
  body('email').isEmail().withMessage('Invalid Email'),
  body('password')
    .isLength({ min: 3 })
    .withMessage('Password must be at least 3 charakters long!'),
  async (req, res) => {
    try {
      const { errors } = validationResult(req);

      if (errors.length > 0) {
        throw errors;
      }

      const token = await register(req.body.email, req.body.password);
      res.json(token);
    } catch (error) {
      const message = parseError(error);
      res.status(400).json({
        message,
      });
    }
  }
);

authController.post('/login', async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    const message = parseError(error);
    res.status(401).json({
      message,
    });
  }
});

authController.get('/logout', async (req, res) => {
  const token = req.token;
  console.log(token);
  await logout(token);
  res.status(204).end();
});

module.exports = authController;
