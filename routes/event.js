var express = require('express');
var router = express.Router();
var Event = require('../models/Event');

router.get('/', function(req, res, next){
	res.send('event page');
})

module.exports = router;