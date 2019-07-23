const express = require('express');
const router = express.Router();
const loginController = require('../controller/404Controller');
router.get('/', loginController.index);

module.exports = router;
