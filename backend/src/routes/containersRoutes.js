const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');
const { addContainer } = require('../controllers/ContainersController');

// Get all containers
router.get('/', (req, res) => {
  const query = 'SELECT * FROM containers';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching containers:', err);
      res.status(500).json({ error: 'Failed to fetch containers' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get a specific container by ID
router.get('/:id', (req, res) => {
  const query = 'SELECT * FROM containers WHERE C_id = ?';
  const { id } = req.params;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching container:', err);
      res.status(500).json({ error: 'Failed to fetch container' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Container not found' });
    } else {
      res.status(200).json(results[0]); // Return the first match
    }
  });
});

// Add a new container
router.post('/', (req, res) => {
  const { C_name, Material, Size, Color } = req.body;

  // Validate input
  if (!C_name || !Material || !Size || !Color) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO containers (C_name, Material, Size, Color) VALUES (?, ?, ?, ?)';
  const values = [C_name, Material, Size, Color];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding container:', err);
      res.status(500).json({ error: 'Failed to add container' });
    } else {
      res.status(201).json({ message: 'Container added successfully', containerId: results.insertId });
    }
  });
});

module.exports = router;
