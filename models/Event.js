var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	start: {
		type: Date,
		required: true
	},
	end: {
		type: Date,
		required: true
	},
	date_added: {
		type: Date,
		default: new Date()
	},
	place: {
		type: String,
		required: true
	},
	host: {
		type: String,
		required: true
	},
	status: {
		type: Number,
		required: true
	},
	limit: {
		type: Number,
		required: true
	},
	freeSeats: {
		type: Number,
		required: true
	},
	users: [{
		type: mongoose.Schema.Types.ObjectId, ref: 'User'
	}],
	description: {
		type: String,
		required: true
	},
	image: {
		type: String,
		default: 'app/common/img/stock.jpg'
	},
	views: {
		type: Number,
		default: 0
	},
	subcategory: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Subcategory'
	},
	sessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Session'}]
});
var Event = mongoose.model('Event', eventSchema);

module.exports= Event;