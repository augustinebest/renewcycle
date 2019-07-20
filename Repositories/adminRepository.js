const model = require('../Models/Admin');
const BaseRepository = require('./BaseRepository');

function adminRepository() {

}

adminRepository.prototype = BaseRepository(model);

module.exports = new adminRepository();