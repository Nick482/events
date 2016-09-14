var express = require('express');
var router = express();
var users = require('./users');
var admin = require('./admin');
var events = require('./events');
var sessions = require('./sessions');
var errorHandler = require('../handlers/error');

require('../helpers/dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res, next){
	console.log(req.body);
})

router.use('/users', users);

router.use('/admin', admin);

router.use('/events', events);

router.use('/sessions', sessions);

router.use('/', function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}, errorHandler);

module.exports = router;
