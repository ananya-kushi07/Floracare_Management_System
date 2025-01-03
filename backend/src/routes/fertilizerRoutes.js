const express = require("express");
const router = express.Router();
const db = require("../config/dbConfig");
const { addFertilizer } = require('../controllers/fertilizerController');

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

router.post('/', (req, res) => {
  const { F_name, Price,Expiry_date,Quality_level,image,link } = req.body;

  if (!F_name||!Price||!Expiry_date||!Quality_level||!image||!link) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO fertilizers (F_name, Price,Expiry_date,Quality_level,image,link) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [F_name, Price,Expiry_date,Quality_level,image,link];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding Fertilizer:', err);
      res.status(500).json({ error: 'Failed to add Fertilizer' });
    } else {
      res.status(201).json({ message: 'Fertilizer added successfully', F_id: results.insertId });
    }
  });
});


module.exports = router;

