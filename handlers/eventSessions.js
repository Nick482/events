var EventSession = require('../models/EventSession');
var Event = require('../models/Event');

function add(req, res, next) {
	var eventSession = new EventSession(req.body);

	Event.findOne({id: eventSession.event}, function(err, event){
		if(err){
			return next(err);
		}
		event.eventSessions.push(eventSession);
		event.save(function(err, event){
			if(err){
				return next(err);
			}
			eventSession.save(function(err, eventSession){
				if(err) {
					return next(err);
				}
				res.status(201);
			})
		})
	})
}

function getOne(req, res, next) {
	EventSession.findById(req.params.id).populate('users').exec(function(err, eventSession){
		if(err) {
			return next(err);
		}
		res.send(eventSession);
	});
}

function getAll(req, res, next) {
	EventSession.find({}, function(err, eventSessions){
		if(err){
			return next(err)
		}
		res.send(eventSessions);
	})
}

function update(req, res, next) {
	EventSession.findOneAndUpdate({id: req.body.id}, req.body).exec(function(err, eventSession){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	EventSession.findOneAndDelete({id: req.params.id}).exec(function(err, eventSession){
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