const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");

// Get all gardeners
router.get("/", (req, res) => {
  const query = "SELECT * FROM gardeners"; // Replace with your actual table name
  db.query(query, (err, results) => {
    if (err) { 
      console.error("Error fetching gardeners:", err);
      res.status(500).send("Server error");
    } else {
      res.json(results);
    }
  });
});

// Get a specific gardener by id
router.get("/:id", (req, res) => {
  const gardenerId = req.params.id; // Get the gardener id from the URL
  const query = "SELECT * FROM gardeners WHERE G_id = ?"; // Query to fetch gardener by id
  db.query(query, [gardenerId], (err, results) => {
    if (err) {
      console.error("Error fetching gardener:", err);
      res.status(500).send("Server error");
    } else if (results.length === 0) {
      res.status(404).send("Gardener not found");
    } else {
      res.json(results[0]); // Send the first (and only) result as JSON
    }
  });
});

module.exports = router;