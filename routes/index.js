var express = require('express');
var router = express();
var users = require('./users');
var admin = require('./admin');
var events = require('./events');
var categories = require('./categories');
var subcategories = require('./subcategories');
var eventSessions = require('./eventSessions');
var errorHandler = require('../handlers/error');
var path = require('path');
router.set('views', path.join(__dirname, '../dist/app'));

require('../helpers/dbConnection');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('app', {title: 'Express'});
});
router.post('/', function(req, res, next){
	console.log(req.body);
})

router.use('/users', users);

router.use('/admin', admin);

router.use('/events', events);

router.use('/eventSessions', eventSessions);

router.use('/categories', categories);

router.use('/subcategories', subcategories);

router.use('/', function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}, errorHandler);

module.exports = router;
