var mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    auth0Id: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;

