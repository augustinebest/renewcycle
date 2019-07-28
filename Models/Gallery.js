const mongoose = require('mongoose');

const gallery = mongoose.Schema({
    photo: { type: String },
    instagramLink: { type: String },
    imageID: { type: String },
    date: { type: Date, default: Date.now()}
})

module.exports = mongoose.model('gallery', gallery);