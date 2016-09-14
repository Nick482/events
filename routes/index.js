var express = require('express');
var router = express.Router();
var user = require('./users');
var admin = require('./admin');
var event = require('./event');
var session = require('./session');

require('../helpers/dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', user);
router.use('/admin', admin);
router.use('/event', event);
router.use('/session', session);


module.exports = router;
