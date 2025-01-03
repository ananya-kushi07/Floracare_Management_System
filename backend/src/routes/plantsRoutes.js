const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const { addPlant } = require('../controllers/plantsControllers');

// Get all plants
router.get('/', (req, res) => {
  const query = 'SELECT * FROM plants';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching plants:', err);
      res.status(500).json({ error: 'Failed to fetch plants' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get a specific plant by ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM plants WHERE P_id = ?';
  const { id } = req.params;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching plant:', err);
      res.status(500).json({ error: 'Failed to fetch plant' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Plant not found' });
    } else {
      res.status(200).json(results[0]); // Return the first match
    }
  });
});


// Add a new plant
router.post('/', (req, res) => {
  const { P_name, P_type, Age, Life_span, Planting_season, photo_url } = req.body;

  // Validate input
  if (!P_name || !P_type || !Age || !Life_span || !Planting_season || !photo_url) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO plants (P_name, P_type, Age, Life_span, Planting_season, photo_url) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [P_name, P_type, Age, Life_span, Planting_season, photo_url];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding plant:', err);
      res.status(500).json({ error: 'Failed to add plant' });
    } else {
      res.status(201).json({ message: 'Plant added successfully', plantId: results.insertId });
    }
  });
});

module.exports = router;