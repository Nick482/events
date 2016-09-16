var mongoose = require('mongoose');
var Event = require('../models/Event');

function add(req, res, next) {
	var event = new Event(req.body);

	event.save(function(err, event){
		if(err) {
			return next(err)
		}
		res.status(201);
	});
}

function update(req, res, next) {
	Event.findOneAndUpdate({id: req.body.id}, req.body).exec(function(err, event){
	if(err) {
		return next(err)
	}
	res.status(200).send('Success');
	});
}

function getOne(req, res, next) {
	Event.findOne({id: req.params.id}).exec(function(err, event){
	if(err) {
		return next(err)
	}
	res.status(200).send(event);
	});
}

function getAll(req, res, next) {
	Event.find({}, function(err, events){
	if(err) {
		return next(err)
	}
	res.status(200).send(events);
	});
}

function remove(req, res, next) {
	Event.findOneAndRemove(req.query).exec(function(err, event){
	if(err) {
		return next(err)
	}
	res.status(200).send('Success');
	});
}

module.exports = {
	add: add,
	update: update,
	getOne: getOne,
	getAll: getAll,
	remove: remove
}