const express = require("express");
const router = express.Router();
const Character = require("../models/Character");

// Get all characters
router.get("/", (req, res) => {
  Character.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Get character by ID
router.get("/:id", (req, res) => {
  Character.getById(req.params.id, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0]);
  });
});

module.exports = router;
