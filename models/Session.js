var mongoose = require('mongoose');

var sessionSchema = new mongoose.Schema({
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
	status: {
		type: Number,
		required: true
	},
	host: {
		type: String,
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
	event: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
	}
})