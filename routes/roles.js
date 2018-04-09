var express = require('express');
var router = express.Router();
var roles = require('../controllers/roles');

router.get('/roles/:role', roles.render);

router.post('/roles/:role/answer/main', roles.checkMainAnswer);
router.post('/roles/:role/answer/subone', roles.checkSubOneAnswer);
router.post('/roles/:role/answer/subtwo', roles.checkSubTwoAnswer);

router.param('role', roles.getRole);

module.exports = router;