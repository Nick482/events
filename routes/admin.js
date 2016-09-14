var express = require('express');
var router = express.Router();
var Admin = require('../models/Admin');

router.get('/', function(req, res, next){
	res.send('admin page, hi');
})

module.exports = router;