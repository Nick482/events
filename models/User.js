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
	event: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Event'
	},
	eventSessions: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'EventSession'
	}]
});
var User = mongoose.model('User', userSchema);

module.exports = User;