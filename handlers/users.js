var User = require('../models/User');
var Event = require('../models/Event');
var EventSession = require('../models/EventSession');


function add(req, res, next) {
	var user = new User(req.body);
	function saveUser(err, session){
		user.save(function(err){
			if(err){
				return next(err)
			}
			res.status(201);
		});
	};
	function updateSessions(err, event) {
		EventSession.update({id: user.sessions}, {$push: {users: user.id}}, saveUser);
	}

	Event.findOne({id: user.event}).exec(function(err, event){
		if(err){
			return next(err);
		}
		if(event.status > 1) {
			event.freeSeats -=1;
			if(event.freeSeats === 0){
			event.status = 1;
			}
		} else {
			return res.send(403);
		}
		event.save(updateSessions);
	});
}

function getOne(req, res, next) {
	User.findById({id: req.params.id}).populate('event eventSessions').exec(function(err, user){
		if(err){
			return next(err)
		}
		res.send(user);
	});
}

function getAll(req, res, next) {
	User.find({}, function(err, users){
		if(err){
			return next(err)
		}
		res.send(users);
	});
}

function update(req, res, next) {
	User.findOneAndUpdate({id: req.body.id}, req.body).exec(function(err, user){
		if(err){
			return next(err);
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	User.findOneAndRemove({id: req.params.id}).exec(function(err, user){
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