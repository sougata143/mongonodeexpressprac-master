var express = require('express')
var router = express.Router();

var user = require('../controllers/user.controller')

router.route('/user').post(user.add_user)
router.route('/user').get(user.list_user)
router.route('/user/:user_id').get(user.list_user_by_id)
router.route('/user/:user_id').put(user.update_user)

module.exports = router