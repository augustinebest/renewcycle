// Creating a constructor for base repository
function BaseRepository(model) {
    if(!model) throw new Error('A model must be provided');
    this.model = model;
}

BaseRepository.prototype.add = function(data, callback) {
    this.model.create(data, callback);
}

BaseRepository.prototype.get = function(data, callback) {
    this.model.findOne({email: data}, callback);
}

BaseRepository.prototype.getAdmin = function(data, callback) {
    this.model.findOne({username: data}, callback);
}

module.exports = (model) => {
    return new BaseRepository(model);
}