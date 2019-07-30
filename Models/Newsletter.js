const mongoose = require('mongoose');

const newsletterEmails = mongoose.Schema({
    name: { type: String },
    email: { type: String },
    date: { type: Date, default: Date.now()}
})

module.exports = mongoose.model('newsletterEmails', newsletterEmails);