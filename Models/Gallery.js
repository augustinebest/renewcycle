const mongoose = require('mongoose');

const gallery = mongoose.Schema({
    photo: { type: String },
    instagramLink: { type: String }
})

module.exports = mongoose.model('gallery', gallery);