var Session = require('../models/Session');

function add(req, res, next) {
	var session = new Session(req.body);

	session.save().then(function(err, session){
		if(err) {
			return next(err)
		}
		res.status(200);
	})
}

function getOne(req, res, next) {
	Session.findOne({id: req.params.id}).then(function(err, session){
		if(err) {
			return next(err)
		}
		res.send(session);
	});
}

function getAll(req, res, next) {
	Session.findAll().then(function(err, sessions){
		if(err){
			return next(err)
		}
		res.send(sessions);
	})
}

function update(req, res, next) {
	Session.findOneAndUpdate({id: req.body.id}, req.body).then(function(err, session){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	Session.findOneAndDelete({id: req.params.id}).then(function(err, session){
		if(err){
			return next(err)
		}
		res.status(200)
	})
}

module.exports = {
	add: add,
	getOne: getOne,
	getAll: getAll,
	update: update,
	remove: remove
}