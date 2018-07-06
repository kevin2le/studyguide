// shoes.js
var express = require('express');
var router = express.Router();
var shoes = require('./../controllers/shoesController');

router.get('/', shoes.index);
router.get('/new', shoes.new);
router.post('/create', shoes.create);
router.get('/:id', shoes.show);
router.get('/:id/edit', shoes.edit);
router.put('/:id', shoes.update);
router.delete('/:id', shoes.destroy);

module.exports = router;