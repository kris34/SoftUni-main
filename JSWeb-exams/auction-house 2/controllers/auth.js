const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
  });
});

authController.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    if (req.body.email == '' || req.body.password == '') {
      throw new Error('All fields are required!');
    }

    if (req.body.password != req.body.repass) {
      throw new Error('Passwords dont match!');
    }

   

    const token = await register(
      req.body.email,
      req.body.firstName,
      req.body.lastName,
      req.body.password
    );
    console.log(token);
    //TODO check assignment to see if register creates session
    res.cookie('token', token);
    res.redirect('/'); //TODO replace with redirect by assignment
  } catch (err) {
    //TODO add error parser
    const errors = parseError(err);
    //TODO add error display to actual template from assignment

    res.render('register', {
      title: 'Register Page',
      errors,
      body: {
        email: req.body.email,
      },
    });
  }
});

authController.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login Page',
  });
});

authController.post('/login', async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);

    res.cookie('token', token);
    res.redirect('/'); //TODO replace with redirect by assignment
  } catch (err) {
    const errors = parseError(err);
    res.render('login', {
      title: 'Login Page',
      errors,
      body: {
        email: req.body.email,
      },
    });
  }
});

authController.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

module.exports = authController;