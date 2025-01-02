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

module.exports = router;