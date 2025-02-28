const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// Get all categories
router.get("/", (req, res) => {
  Category.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
