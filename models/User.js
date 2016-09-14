var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
	},
	company: {
		type: String
	},
	events: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
	}],
	sessions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Session'
	}]
});
var User = mongoose.model('User', userSchema);

module.exports = User;