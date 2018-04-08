var express = require('express');
var router = express.Router();
var index = require('../controllers/index');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', index.render);

module.exports = router;
