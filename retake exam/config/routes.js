const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const siteController = require('../controllers/siteController');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/site', siteController);
  app.use('*', (req, res) => {
    res.render('404');
  });
};
