const authController = require('../controllers/auth');
const cryptoController = require('../controllers/crypto');
const homeController = require('../controllers/home');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/crypto', cryptoController);
};
