const mongoose = require('mongoose');

const newsletterEmails = mongoose.Schema({
    name: { type: String },
    email: { type: String }
})

module.exports = mongoose.model('newsletterEmails', newsletterEmails);