var express = require('express')
var router = express.Router();

var product = require('../controllers/product.controller')

router.route('/product').get(product.list_products)
router.route('/product').post(product.add_product)
router.route('/product/:product_id').get(product.list_by_id)
router.route('/product/:product_id').put(product.update)
router.route('/product/:product_id').delete(product.delete)

module.exports = router