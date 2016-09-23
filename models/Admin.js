var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({
	login: {
		type: String,
		required: true
	}, 
	password: {
		type: String,
		required: true
	}
});

adminSchema.methods.validPassword = function(password) {
    return (password === this.password);
};

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;