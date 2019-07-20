const model = require('../Models/Gallery');
const BaseRepository = require('./BaseRepository');

function galleryRepository() {

}

galleryRepository.prototype = BaseRepository(model);

module.exports = new galleryRepository();