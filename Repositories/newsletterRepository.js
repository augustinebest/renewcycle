const model = require('../Models/Newsletter');
const BaseRepository = require('./BaseRepository');

function newsletterRepository() {

}

newsletterRepository.prototype = BaseRepository(model);

module.exports = new newsletterRepository();