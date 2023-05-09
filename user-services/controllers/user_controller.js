'use strict';

const mongoose = require('mongoose'),
    User = mongoose.model('Users');

exports.allUserList = function (req, res) {
    User.find({}).then(users=>{
        return res.json(users);
    });
};


exports.createUser = function (req, res) {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser.save().then(user=>{res.json(user);});
};


exports.viewUser = function (req, res) {
    console.log(req.params," $$ $$ ")
    User.findById(req.params.userId).then(user=>{
        res.json(user)
    })
};


exports.updateUser = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, {

    });
};
