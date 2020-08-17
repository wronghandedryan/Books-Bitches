const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
      .then(dbAddedBook => res.json(dbAddedBook))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbAddedBook => res.json(dbAddedBook))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbAddedBook => res.json(dbAddedBook))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.AddedBook.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbAddedBook => res.json(dbAddedBook))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.AddedBook.findById(req.params.id)
      .then(dbAddedBook => dbAddedBook.remove())
      .then(dbAddedBook => res.json(dbAddedBook))
      .catch(err => res.status(422).json(err));
  }
};
