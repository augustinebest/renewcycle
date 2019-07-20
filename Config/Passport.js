const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Admin = require('../Models/Admin');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'username'}, (username, password, done) => {
            Admin.findOne({ username: username })
            .then(user => {
                if(!user) {
                    return done(null, false, {message:  'Invalid details'});
                }
                // Match Password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if(err) console.log(err);
                    if(isMatch) {
                        return done(null, user)
                    } else {
                        return done(null, false, {message: 'Password incorrect'})
                    }
                })
            })
            .catch(err => console.log(err))
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });
    passport.deserializeUser((id, done) => {
        Admin.findById(id, function(err, user) {
            done(err, user);
        })
    })
}