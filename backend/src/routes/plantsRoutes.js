const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

// Get all plants
router.get('/', (req, res) => {
  const query = 'SELECT * FROM plants';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching plants:', err);
      res.status(500).send('Server error');
    } else {
      res.json(results);
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
      res.status(500).send('Server error');
    } else {
      res.json(results[0]); // Return the first match
    }
  });
});

module.exports = router;