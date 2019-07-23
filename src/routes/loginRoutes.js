const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController');
const passport = require('passport');
const { isNoLoggedIn } = require('../config/auth');

router.get('/', isNoLoggedIn, loginController.login);

router.post('/signin', (req, res, next) => {
  passport.authenticate('local.signin', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })(req, res, next);
});


router.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});


module.exports = router;
