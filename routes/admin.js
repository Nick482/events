var express = require('express');
var router = express();
var adminHandler = require('../handlers/admin');
var path = require('path');
router.set('views', path.join(__dirname, '../dist/admin'));

router.get('/', function(req, res, next){
	res.render('admin', {title: "Express"});
})

router.post('/', adminHandler.add);

router.put('/', adminHandler.update);

router.delete('/:id', adminHandler.remove);

module.exports = router;