var mongoose = require('mongoose');
var Event = require('../models/Event');
var Subcategory = require('../models/Subcategory');

function add(req, res, next) {
	var event = new Event(req.body);

  Subcategory.findById(event.subcategory, function(err, subcategory){
    if (err) {
      return next(err);
    }
    subcategory.events.push(event._id);
    subcategory.save(function(err, subcategory){
      if(err) {
        return next(err);
      }
      event.image = 'app/common/img/' + subcategory.title + '.jpg';
    	event.save(function(err, event){
    		if(err) {
    			return next(err)
    		}
    		res.status(201).send(event);
    	});
    });
  });
}

function update(req, res, next) {
	Event.findByIdAndUpdate(req.body._id, req.body).exec(function(err, event){
	if(err) {
		return next(err)
	}
	res.status(200).send('Success');
	});
}

function getOne(req, res, next) {
	Event.findById(req.params.id).populate('eventSessions').exec(function(err, event){
	if(err) {
		return next(err)
	}
  event.views +=1;
  event.save(function(err, event){
      res.status(200).send(event);
    });
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

function getTop(req, res, next) {
	Event.find({status: {$in: [2,3]}}).sort('-views').limit(12).exec(function(err, events){
    if(err) {
      return next(err);
    }
    res.status(200).send(events);
  });
}

function getClosest(req, res, next) {
	Event.find({status: {$in: [2,3]}}).sort('start').limit(12).exec(function(err, events){
    if(err) {
      return next(err);
    }
    res.status(200).send(events);
  });
}

function getLatest(req, res, next) {
	Event.find({status: {$in: [2,3]}}).sort('-date_added').limit(12).exec(function(err, events){
    if(err) {
      return next(err);
    }
    res.status(200).send(events);
  });
}

function search(req, res, next) {
  console.log(req.params);

  Event.find({title: new RegExp(req.params.text, "i")}, function(err, events) {
    console.log(events);
  if(err){
    return next(err);
  }
  res.status(200).send(events);
});
}

function remove(req, res, next) {
	Event.findByIdAndRemove(req.query.id).exec(function(err, event){
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
	getTop: getTop,
  search: search,
	getLatest: getLatest,
	getClosest: getClosest,
	remove: remove
}
