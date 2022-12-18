const { verifyToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    try {
      const userData = verifyToken(token);
      res.locals.username = userData.username;
      req.user = userData;
    } catch (err) {
      res.clearCookie('token');
      res.redirect('/auth/login');
      return;
    }
  }
  next();
};