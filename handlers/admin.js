var mongoose = require('mongoose');
var Admin = require('../models/Admin');

function add(req, res, next){
	var admin = new Admin(req.body);
	admin.save().exec(function(err, admin){
		if(err){
			return next(err);
		}
		res.status(201);
	})
}

function update(req, res, next){
	var body = req.body;
	Admin.findOneAndUpdate({id: body.id}, body).exec(function(err, admin){
		if(err){
			return next(err)
		}
	res.status(200);
	});
}

function remove(req, res, next){
	Admin.findOneAndRemove({id: req.params.id}).exec(function(err, admin){
		if(err){
			return next(err);
		}
	res.send(admin);
	});
}

module.exports = {
	add: add,
	update: update,
	remove: remove
};