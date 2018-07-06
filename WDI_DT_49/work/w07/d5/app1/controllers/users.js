const User = require('./../models/user');

module.exports = {
    index: index
};

function index(req, res) {
    User.find({}, (err, docs) => {
        res.render('./users/index', {users: docs})   
    })
};