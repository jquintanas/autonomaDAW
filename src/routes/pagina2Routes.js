const express = require('express');
const router = express.Router();
const controller = require('../controller/pagina2Controller');
const passport = require('passport');

router.get('/', controller.index);
module.exports = router;
