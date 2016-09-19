var mongoose = require('mongoose');

var subcategorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	image: {
		type: String,
		default: 'app/common/img/stock.jpg'
	},
	events: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
	}]
});

var Subcategory = mongoose.model('Subcategory', subcategorySchema);

module.exports = Subcategory;