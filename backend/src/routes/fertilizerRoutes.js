const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");

// Get all fertilizers
router.get("/", (req, res) => {
  const query = "SELECT * FROM fertilizers"; // Replace with your actual table name
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching fertilizers:", err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// Get a specific fertilizer by id
router.get("/:id", (req, res) => {
  const fertilizerId = req.params.id; // Get the fertilizer id from the URL
  const query = "SELECT * FROM fertilizers WHERE F_id = ?"; // Query to fetch fertilizer by id
  db.query(query, [fertilizerId], (err, results) => {
    if (err) {
      console.error("Error fetching fertilizer:", err);
      res.status(500).send("Server error");
    } else if (results.length === 0) {
      res.status(404).send("Fertilizer not found");
    } else {
      res.json(results[0]); // Send the first (and only) result as JSON
    }
  });
});

module.exports = router;
