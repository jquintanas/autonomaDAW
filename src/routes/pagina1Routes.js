const express = require('express');
const router = express.Router();
const controller = require('../controller/pagina1Controller');
const passport = require('passport');

router.get('/', controller.index);
module.exports = router;
