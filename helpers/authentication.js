var Admin = require('../models/Admin');

function checkAdmin(req, res, next){
	var err = {status: 401, message: 'Unauthorized'};
	req.user ?
	Admin.findById(req.user._id, function(err, admin){
		if(err) {
			return next(err.message);
		} else if(!admin) {
			err = new Error('Unauthorized');
			return next(err.message);
		} else {
			next();
		}
	}) :
	next(err);
}

function logout(req, res, next){
	req.logout();
	res.status(200).send('Success');
}

module.exports = {
	checkAdmin: checkAdmin,
	logout: logout
};