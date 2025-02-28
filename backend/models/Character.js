const db = require("../config/db");

const Character = {
  getAll: (callback) => {
    db.query("SELECT * FROM characters", callback);
  },

  getById: (id, callback) => {
    db.query("SELECT * FROM characters WHERE id = ?", [id], callback);
  },

  create: (character, callback) => {
    db.query("INSERT INTO characters SET ?", character, callback);
  },

  update: (id, character, callback) => {
    db.query("UPDATE characters SET ? WHERE id = ?", [character, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM characters WHERE id = ?", [id], callback);
  },
};

module.exports = Character;
