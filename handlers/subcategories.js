var mongoose = require('mongoose');
var Subcategory = require('../models/Subcategory');
var Category = require('../models/Category');
var Event = require('../models/Event');

function add(req, res, next){
	var subcategory = new Subcategory(req.body);

	Category.findById(subcategory.category, function(err, category){
		if(err){
			return next(err);
		}
		category.subcategories.push(subcategory.id);
		category.save(function(err, category){
			if(err){
				return next(err);
			}
			subcategory.image = 'app/common/img/' + subcategory.title + '.jpg';
			subcategory.save(function(err, subcategory){
				if(err){
					return next(err)
				}
				res.status(201).send(subcategory);
			});
		})
	})
}

function getOne(req, res, next){
	Event.find({subcategory: req.params.id}).skip(req.params.page * 8).limit(8).exec(function(err, events){
		if(err){
			return next(err);
		}
		res.status(200).send(events);
	})
}

function getAll(req, res, next){
	Subcategory.find({}, function(err, categories){
		if(err){
			return next(err);
		}
		res.status(200).send(categories);
	})
}

function update(req, res, next){
	Subcategory.findByIdAndUpdate(req.body._id, req.body).exec(function(err, subcategory){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next){
	Subcategory.findByIdAndRemove(req.params.id).exec(function(err, subcategory){
		if(err){
			return next(err);
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