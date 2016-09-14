var express = require('express');
var router = express.Router();
var Session = require('../models/Session');

router.get('/', function(req, res, next){
	res.send('session page');
})

module.exports = router;