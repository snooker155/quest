var express = require('express');
var router = express.Router();
var join = require('../controllers/join');

router.get('/join', join.render);

module.exports = router;