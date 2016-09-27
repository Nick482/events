var validator = require('validator');
var err;

function admin(req, res, next) {
	var body = req.body;

	if(
		(!body.login || validator.isAlphaNumeric(body.login)) &&
		(!body.password || validator.isLength(body.password, {min: 8, max: 64}))
	) {
		return next()
	} else {
		err = new Error('Validation Error');
		return next(err);
	}
}


function user(req, res, next) {
	var body = req.body;

	if(
		(!body.firstName || validator.isAlpha(body.firstName)) &&
		(!body.lastName || validator.isAlpha(body.lastName)) &&
		(!body.email || validator.isEmail(body.email)) &&
		(!body.phone || validator.isNumeric(body.phone))
	) {
		return next();
	} else {
		err = new Error('Validation Error');
		return next(err);
	}
}

function event(req, res, next) {
	var body = req.body;

	if(
		(!body.title || validator.isAlphaNumeric(body.title)) &&
		(!body.start || validator.isDate(body.start)) &&
		(!body.end || validator.isDate(body.end)) &&
		(!body.place || validator.isAlphaNumeric(body.place)) &&
		(!body.host || validator.isAlpha(body.host)) &&
		(!(body.status === undefined) || validator.isNumeric(body.status.toString())) &&
		(!body.limit || validator.isNumeric(body.limit.toString())) &&
		(!body.description || validator.isAlphaNumeric(body.description)) &&
		(!body.subCategory || validator.isAlpha(body.subCategory))
	) {
		return next();
	} else {
		err = new Error('Validation Error');
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
		err = new Error('Validation Error');
		return next(err);
	}
}


module.exports = {
	admin: admin,
	user: user,
	event: event,
	session: session
}