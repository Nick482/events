var express = require('express');
var router = express();
var adminHandler = require('../handlers/admin');
var path = require('path');
var passport = require('../helpers/passportConfig');
var authentication = require('../helpers/authentication');
router.set('views', path.join(__dirname, '../dist/admin'));

router.get('/logout', authentication.logout);

router.get('/verify', authentication.checkAdmin, function(req, res, next){
	res.status(200).send('Verified');
});

router.get('/', function(req, res, next){
	res.render('admin', {title: "Express"});
});

router.post('/login', 
	passport.authenticate('local', {successRedirect: '/admin'})
);

router.post('/', adminHandler.add);

router.put('/', adminHandler.update);

router.delete('/:id', adminHandler.remove);

router.use('/', function(req, res, next){
	res.render('admin', {title: "Express"});
});

module.exports = router;