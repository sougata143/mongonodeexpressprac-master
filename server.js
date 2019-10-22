var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var cors = require('cors')
var app = express()

//model
var user = require('../rest_with_mongo_node_prac/models/user.model')

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

var port = process.env.port || 8090
var router = express.Router()

mongoose.connect('mongodb://localhost:27017/users', {useNewUrlParser: true})

router.use(function(req,res,next){
    console.log('Logger Run')
    next()
})

var user_router = require('../rest_with_mongo_node_prac/routers/user.router')
var product_router = require('../rest_with_mongo_node_prac/routers/product.router')

app.use(cors())
app.use('/user', user_router)
app.use('/product', product_router)

app.listen(port)
console.log('listening on '+port)