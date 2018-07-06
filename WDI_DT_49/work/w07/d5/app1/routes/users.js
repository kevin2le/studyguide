const express = require('express');
const router = express.Router();
const usersController = require('./../controllers/users');

// GET all users
router.get('/', usersController.index);

module.exports = router;
