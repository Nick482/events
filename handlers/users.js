var User = require('../models/User');

function add(req, res, next) {
	var user = new User(req.body);
	user.save().then(function(err){
		if(err){
			return next(err)
		}
		res.status(200);
	});
}

function getOne(req, res, next) {
	User.findOne({id: req.params.id}).then(function(err, user){
		if(err){
			return next(err)
		}
		res.send(user);
	});
}

function getAll(req, res, next) {
	User.findAll().then(function(err, users){
		if(err){
			return next(err)
		}
		res.send(users);
	});
}

function update(req, res, next) {
	User.findOneAndUpdate({id: req.body.id}, req.body).then(function(err, user){
		if(err){
			return next(err);
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	User.findOneAndRemove({id: req.params.id}).then(function(err, user){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

module.exports = {
	add: add,
	getOne: getOne,
	getAll: getAll,
	update: update,
	remove: remove
}