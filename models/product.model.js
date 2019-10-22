var mongoose = require('mongoose')
var schema = mongoose.Schema

var ProductSchema = new schema({
    name: String,
    price: Number
})

module.exports = mongoose.model('Product', ProductSchema)