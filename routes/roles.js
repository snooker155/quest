var express = require('express');
var router = express.Router();
var roles = require('../controllers/roles');

router.get('/roles/:role', roles.render);

router.param('role', roles.getRole);

module.exports = router;