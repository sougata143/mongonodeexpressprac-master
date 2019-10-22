var mongoose = require('mongoose')
var schema = mongoose.Schema

var UserSchema = new schema({
    name: String,
    role: String,
    email: String
})

module.exports = mongoose.model('User', UserSchema)