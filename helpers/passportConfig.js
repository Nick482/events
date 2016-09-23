var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Admin = require('../models/Admin');

passport.use(new LocalStrategy({ usernameField: 'login', passwordField: 'password' },
  function(login, password, done) {
    Admin.findOne({ login: login }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  Admin.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;