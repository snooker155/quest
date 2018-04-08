var express = require('express');
var router = express.Router();
var host = require('../controllers/host');

router.get('/host', host.render);

module.exports = router;