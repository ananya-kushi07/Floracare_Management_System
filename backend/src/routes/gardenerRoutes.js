const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");
const { addGardener } = require('../controllers/gardenerController');

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

router.post('/', (req, res) => {
  const { G_name, Phone,Experience_level,Specialization,image } = req.body;

  if (!G_name||!Phone||!Experience_level||!Specialization||!image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO gardeners (G_name, Phone,Experience_level,Specialization,image) VALUES (?, ?, ?, ?, ?)';
  const values = [G_name, Phone,Experience_level,Specialization,image];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding gardener:', err);
      res.status(500).json({ error: 'Failed to add gardener' });
    } else {
      res.status(201).json({ message: 'gardener added successfully', G_id: results.insertId });
    }
  });
});

module.exports = router;