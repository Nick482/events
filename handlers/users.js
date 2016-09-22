var User = require('../models/User');
var Event = require('../models/Event');
var EventSession = require('../models/EventSession');


function add(req, res, next) {
	var user = new User(req.body);
	function saveUser(err, session){
		user.save(function(err, user){
			if(err){
				return next(err)
			}
			User.findById(user._id).populate('event eventSessions').exec(function(err, userPop){
			req.body = userPop;
			next();
			})
			});
	};
	function updateSessions(err, event) {
		EventSession.update({_id: {$in: user.sessions}}, {$push: {users: user._id}}, saveUser);
	}

	Event.findById(user.event).exec(function(err, event){
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
	User.findById(req.params.id).populate('event eventSessions').exec(function(err, user){
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
	User.findByIdAndUpdate(req.body._id, req.body).exec(function(err, user){
		if(err){
			return next(err);
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	User.findByIdAndRemove(req.params.id).exec(function(err, user){
		if(err){
			return next(err)
		}
		res.status(200).send(user);
	})
}

module.exports = {
	add: add,
	getOne: getOne,
	getAll: getAll,
	update: update,
	remove: remove
}