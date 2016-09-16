var mongoose = require('mongoose');
var Subcategory = require('../models/Subcategory');
var Category = require('../models/Category');

function add(req, res, next){
	var subcategory = new Subcategory(req.body);
	// console.log(subcategory);

	Category.findById(subcategory.category, function(err, category){
		if(err){
			return next(err);
		}
		category.subcategories.push(subcategory.id);
		category.save(function(err, category){
			if(err){
				return next(err);
			}
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
	Subcategory.findById(req.params.id).populate('events').exec(function(err, subcategory){
		if(err){
			return next(err);
		}
		res.status(200).send(subcategory)
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
	Subcategory.findOneAndUpdate({id: req.body.id}, rea.body).exec(function(err, subcategory){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next){
	Subcategory.findOneAndRemove({id: req.params.id}).exec(function(err, subcategory){
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