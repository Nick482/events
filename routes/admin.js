var express = require('express');
var router = express.Router();
var adminHandler = require('../handlers/admin');

router.get('/', function(req, res, next){
	res.send('admin page, hi');
})

router.post('/', adminHandler.add);

router.put('/', adminHandler.update);

router.delete('/', adminHandler.remove);

module.exports = router;