require("dotenv").config();
const express = require("express");
// const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session')
const bodyparser = require('body-parser');
const morgan = require('morgan');
const path = require("path");
const passport = require('passport');

const app = express();

// Passport Config
require('./Config/Passport')(passport);
const navigation = require('./routes/navigation');
const subscribe = require('./routes/subscribe');
const gallery = require('./routes/gallery');
const admin = require('./routes/admin');


// app.use(expressLayout);
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'))

//Connecting to the local database
mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/renewcykle', { useNewUrlParser: true }); 

// Connection to mlab
mongoose.connect('mongodb://renewcycle:renewcycle1@ds151997.mlab.com:51997/renewcycle', { useNewUrlParser: true })

//Middleware
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// Express session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))

// Passport use
app.use(passport.initialize());
app.use(passport.session());

// connect flash
app.use(flash());

// Global vars
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})
app.get('*', (req, res) => res.send('Error 404'))
// Routing
app.use('/', navigation);
app.use('/s', subscribe);
app.use('/gallery', gallery);
app.use('/admin', admin);

module.exports = app;