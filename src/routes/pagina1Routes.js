const express = require('express');
const router = express.Router();
const controller = require('../controller/pagina1Controller');
const passport = require('passport');
const { isNoLoggedIn } = require('../config/auth');

router.get('/', isNoLoggedIn, controller.index);
module.exports = router;
