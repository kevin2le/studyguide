const User = require('./../models/user');

module.exports = {
    index: index,
    new: newPost,
    create: create,
    show: show,
    remove: remove
};

function index(req, res) {
    User.findById(req.params.user_id, (err, user) => {
        res.render('./posts/index', {user: user})   
    });
};

function newPost(req, res) {
    res.render('./posts/new', {id: req.params.user_id});
};

function create(req, res) {
    let id = req.body.userId;
    User.findById(id, (err, user) => {
        if (err) res.redirect(`/${id}/posts/new`)
        delete req.body.userId;
        user.posts.push(req.body);
        user.save()
        res.redirect(`/users/${id}/posts`)
        
    })
};

function show(req, res) {
    User.findById(req.params.user_id, (err, doc) => {
        res.render('./posts/show', {post: doc.posts.id(req.params.posts_id) })
    });
};

function remove(req, res) {
    User.findById(req.params.user_id, (err, doc) => {
        doc.posts.id(req.params.posts_id).remove();
        doc.save();
        res.redirect('/')
    });

};