var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
	title: 'string',
	start: 'date',
	end: 'date',
	status: 'number',
	limit: 'number',
	freeSeats: 'number'
});
var Event = mongoose.model('Event', eventSchema);

module.exports= Event;