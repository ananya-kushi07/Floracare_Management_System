const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

// Get all tools
router.get('/', (req, res) => {
  const query = 'SELECT T_id, T_name, T_type, T_PowerSource, T_image FROM tools';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tools:', err);
      res.status(500).json({ error: 'Failed to fetch tools' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Get a specific tool by ID
router.get('/:id', (req, res) => {
  const query = 'SELECT T_id, T_name, T_type, T_PowerSource, T_image FROM tools WHERE T_id = ?';
  const { id } = req.params;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching tool:', err);
      res.status(500).json({ error: 'Failed to fetch tool' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Tool not found' });
    } else {
      res.status(200).json(results[0]); // Return the first match
    }
  });
});

// Add a new tool
router.post('/', (req, res) => {
  const { T_name, T_type, T_PowerSource, T_image } = req.body;

  // Validate input
  if (!T_name || !T_type || !T_PowerSource || !T_image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO tools (T_name, T_type, T_PowerSource, T_image) VALUES (?, ?, ?, ?)';
  const values = [T_name, T_type, T_PowerSource, T_image];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Error adding tool:', err);
      res.status(500).json({ error: 'Failed to add tool' });
    } else {
      res.status(201).json({ message: 'Tool added successfully', toolId: results.insertId });
    }
  });
});

module.exports = router;
