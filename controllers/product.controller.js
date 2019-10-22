var product = require('../models/product.model')

exports.add_product = function(req, res){
    var prod = new product()
    prod.name = req.body.name
    prod.price = req.body.price

    prod.save(function(err){
        if(err){
            res.send(err)
        }
        res.send(prod)
    })
}

exports.list_products = function(req, res){
    product.find(function(err, prod){
        if(err){
            res.send(err)
        }
        res.send(prod)
    })
}

exports.list_by_id = function(req, res){
    product.findById(req.params.product_id, function(err, prod){
        if(err){
            res.send(err)
        }
        res.send(prod)
    })
}

exports.update = function(req, res){
    product.findById(req.params.product_id, function(err, prod){
        if(err){
            res.send(err)
        }
        prod.name = req.body.name
        prod.price = req.body.price

        prod.save(function(err, prod){
            if(err){
                res.send(err)
            }
            res.send(prod)
        })
    })
}

exports.delete = function(req, res){
    product.remove({_id: req.param.product_id}, function(err, prod){
        if(err){
            res.send(err)
        }
        res.send(prod + " deleted")
    })
}