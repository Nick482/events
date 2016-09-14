var mongoose = require('mongoose');
var Admin = require('../models/Admin');

function add(req, res, next){
	console.log(req.body);
	var admin = new Admin(req.body);
	res.send(admin);
}

function update(req, res, next){
	// var body = req.body;
	// Admin.findOneAndUpdate({login: body.login}, body).then(function(err, admin){
	// 	if(err){
	// 		return next(err)
	// 	}
	// res.send(admin);
	// });
	res.send('updated');
}

function remove(req, res, next){
	// Admin.findOneAndRemove(req.query).then(function(err, admin){
	// 	if(err){
	// 		return next(err);
	// 	}
	// res.send(admin);
	// });
	res.send('removed');
}

module.exports = {
	add: add,
	update: update,
	remove: remove
};