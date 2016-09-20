var mongoose = require('mongoose');
var Category = require('../models/Category');

function add(req, res, next){
	var category = new Category(req.body);

	category.image = 'app/common/img/' + category.title + '.jpg';

	category.save(function(err, category){
		if(err){
			return next(err)
		}
		res.status(201).send(category);
	});
}

function getOne(req, res, next){
	Category.findById(req.params.id).populate('subcategories').exec(function(err, category){
		console.log(category);
		if(err){
			return next(err);
		}
		res.status(200).send(category);
	})
}

function getAll(req, res, next){
	Category.find({}).populate('subcategories', 'title image').exec(function(err, categories){
		if(err){
			return next(err);
		}
		res.status(200).send(categories);
	})
}

function update(req, res, next){
	Category.findByIdAndUpdate(req.body._id, rea.body).exec(function(err, category){
		if(err){
			return next(err)
		}
		res.status(200);
	})
}

function remove(req, res, next){
	Category.findByIdAndRemove(req.params.id).exec(function(err, category){
		if(err){
			return next(err);
		}
		res.status(200).send(category);
	})
}

module.exports = {
	add: add,
	getOne: getOne,
	getAll: getAll,
	update: update,
	remove: remove
}