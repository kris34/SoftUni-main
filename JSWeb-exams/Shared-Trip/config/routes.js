const authController = require('../controllers/auth');
const homeController = require('../controllers/home');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
};
