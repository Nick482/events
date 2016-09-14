var mongoose = require('mongoose');

var adminSchema = new mongoose.Schema({login: 'string', password: 'string'});

var Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;