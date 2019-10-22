var user = require('../models/user.model')

exports.add_user = function(req, res){
    var usr = new user()
    usr.name = req.body.name
    usr.email = req.body.email
    usr.role = req.body.role

    usr.save(function(err){
        if(err){
            res.send(err)
        }
        res.send('User Added Sucessfully')
    });
};

exports.list_user = function(req, res){
    user.find(function(err, usr){
        if(err){
            res.send(err)
        }
        res.send(usr)
    });
};

exports.list_user_by_id = function(req, res){
    user.findById(req.params.user_id, function(err, usr){
        if(err){
            res.send(err)
        }
        res.send(usr)
    });
};

exports.update_user = function(req, res){
    user.findById(req.params.user_id, function(err, usr){
        usr.name = req.body.name
        usr.email = req.body.email
        usr.role = req.body.role
        usr.save(function(err){
            if(err){
                res.send(err)
            }
            res.send('user updated')
        })
    })
}