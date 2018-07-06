/*

  This file contains 5 methods that help us interact with our database.
  Our actual database which is just a JS object can be found in db/db.js

  Documentation:

  * addshoe takes 3 arguments (name, year, description)
  and adds a shoe to our "database"
  * deleteshoe takes a shoe ID and deletes the shoe from the database
  * updateshoe takes 4 arguments (id, name, year, description)
  and updates the corresponding record in our "database"
  * getAllshoes returns all shoes from the database
  * showshoe takes a shoe id and returns the corresponding data for that shoe in JSON form

*/

const db = require('./../db/db');

modelMethods = {

  primaryKey: 1,

  addshoe: function(name, year, description) {

    let newShoeEntry = {
      id: this.primaryKey,
      "name": name,
      "year": year,
      "description": description
    };

    db[this.primaryKey] = newShoeEntry;
    this.primaryKey++;

  },

  getAllShoes: function() {
    return db;
  },

  getShoe: function(id) {
    return db[id];
  },

  updateShoe: function(id, name, year, description) {
     db[id] = {
        id: id,
        name: name,
        year: year,
        description: description
     }
  },

  deleteshoe:  function(id) {
    delete db[id]
  }

};

module.exports = modelMethods;