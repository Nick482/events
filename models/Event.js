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
	description: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	subCategory: {
		type: String,
		required: true
	},
	sessions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Session'}]
});
var Event = mongoose.model('Event', eventSchema);

module.exports= Event;