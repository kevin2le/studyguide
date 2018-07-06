const express = require('express');
const router = express.Router();
const postsController = require('./../controllers/posts');

// GET all posts
router.get('/users/:user_id/posts', postsController.index);

// GET a single post 
router.get('/users/:user_id/posts/:posts_id', postsController.show);

// GET new post form
router.get('/users/:user_id/posts/new', postsController.new);

// POST new post
router.post('/posts', postsController.create);

// DELETE a single post
router.delete('/users/:user_id/posts/:posts_id', postsController.remove);

module.exports = router;
