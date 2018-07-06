const model = require('./../models/Shoe');

module.exports = shoesController = {

  index: function(req, res, next) {
    res.render('./shoes/index', { shoes: model.getAllShoes() });
  },

  new: function(req, res, next) {
    res.render('./shoes/new');
  },

  create: function(req, res, next) {
    let params = req.body;
    model.addshoe(params.shoeName, params.shoeReleaseYear, params.shoeDescription)
    res.redirect('/');
  },

  show: function(req, res, next) {
      let id = req.params.id
      let shoe = model.getShoe(id);
      res.render('./shoes/show', { shoe: shoe })
  },

  edit: function(req, res,  next) {
    let id = req.params.id
    let shoe = model.getShoe(id);
    res.render('./shoes/edit', { shoe: shoe })
  },

  update: function(req, res, next) {
    model.updateShoe(req.params.id, req.body.shoeName, req.body.shoeReleaseYear, req.body.shoeDescription)
    res.redirect('/');
  },

  destroy: function(req, res, next) {
    model.deleteshoe(req.params.id)
    res.redirect('/')
  }

};