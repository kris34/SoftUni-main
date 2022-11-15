const auctionsController = require('../controllers/auctions');
const authController = require('../controllers/auth');
const homeController = require('../controllers/home');

module.exports = (app) => {
  app.use('/', homeController);
  app.use('/auth', authController);
  app.use('/auctions', auctionsController);
  app.use('*', (req, res) => {
    res.render('404');
  });
};
