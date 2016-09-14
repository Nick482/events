var express = require('express');
var router = express();
var user = require('./user');
var admin = require('./admin');
var event = require('./event');
var session = require('./session');
var errorHandler = require('../handlers/errorHandler');

require('../helpers/dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next){
	console.log(req.body);
})

router.use('/user', user);
router.use('/admin', admin);
router.use('/event', event);
router.use('/session', session);

router.use('/', function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}, errorHandler);

module.exports = router;
