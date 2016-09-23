var mongoose = require('mongoose');
var Admin = require('../models/Admin');

function add(req, res, next){
	var admin = new Admin(req.body);
	admin.save(function(err, admin){
		if(err){
			return next(err);
		}
		res.status(201).send('Success');
	})
}

function update(req, res, next){
	var body = req.body;
	Admin.findByIdAndUpdate(body._id, body).exec(function(err, admin){
		if(err){
			return next(err)
		}
	res.status(200).send("Success");
	});
}

function remove(req, res, next){
	Admin.findByIdAndRemove(req.params.id).exec(function(err, admin){
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