var validator = require('validator');
var err = new Error('Validation Error');

function admin(req, res, next) {
	var body = req.body;

	if(
		validator.isAlphaNumeric(body.login) &&
		validator.isLength(body.password, {min: 8, max: 64})
	) {
		return next()
	} else {
		return next(err);
	}
}


function user(req, res, next) {
	var body = req.body;

	if(
		validator.isAlpha(body.firstName) &&
		validator.isAlpha(body.lastName) &&
		validator.isEmail(body.email) &&
		validator.isNumeric(body.phone)
	) {
		return next();
	} else {
		return next(err);
	}
}

function event(req, res, next) {
	var body = req.body;

	if(
		validator.isAlphaNumeric(body.title) &&
		validator.isDate(body.start) &&
		validator.isDate(body.end) &&
		validator.isAlphaNumeric(body.place) &&
		validator.isAlpha(body.host) &&
		validator.isNumeric(body.status.toString()) &&
		validator.isNumeric(body.limit.toString()) &&
		validator.isNumeric(body.freeSeats.toString()) &&
		validator.isAlphaNumeric(body.description) &&
		validator.isAlpha(body.category) &&
		validator.isAlpha(body.subCategory)
	) {
		return next();
	} else {
		next(err);
	}
}

function session(req, res, next) {
	var body = req.body;

	if(
		validator.isAlphaNumeric(body.title) &&
		validator.isDate(body.start) &&
		validator.isDate(body.end) &&
		validator.isNumeric(body.status.toString()) &&
		validator.isAlpha(body.host) &&
		validator.isNumeric(body.limit.toString()) &&
		validator.isNumeric(body.freeSeats.toString()) &&
		validator.isMongoId(body.event)
	) {
		return next()
	} else {
		return next(err);
	}
}


module.exports = {
	admin: admin,
	user: user,
	event: event,
	session: session
}