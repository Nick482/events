var EventSession = require('../models/EventSession');
var Event = require('../models/Event');

function add(req, res, next) {
	var eventSession = new EventSession(req.body);

	eventSession.freeSeats = eventSession.limit;

	Event.findById(eventSession.event, function(err, event){
		if(err){
			return next(err);
		}
		event.eventSessions.push(eventSession._id);
		event.save(function(err, event){
			if(err){
				return next(err);
			}
			eventSession.save(function(err, eventSession){
				if(err) {
					return next(err);
				}
				res.status(201).send(eventSession);
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
	EventSession.findByIdAndUpdate(req.body._id, req.body).exec(function(err, eventSession){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next) {
	EventSession.findByIdAndRemove(req.params.id).exec(function(err, eventSession){
		if(err){
			return next(err)
		}
		res.status(200).send(eventSession);
	})
}

module.exports = {
	add: add,
	getOne: getOne,
	getAll: getAll,
	update: update,
	remove: remove
}