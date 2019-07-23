const express = require('express');
const router = express.Router();
const loginController = require('../controller/adminController');
const { isLoggedIn } = require('../config/auth');
router.get('/', isLoggedIn,loginController.index);

module.exports = router;
