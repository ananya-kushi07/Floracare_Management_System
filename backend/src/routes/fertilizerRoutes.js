const express = require('express');
const FertilizerController = require('../controllers/fertilizerController');
const router = express.Router();

// Route to get all fertilizers
router.get('/', FertilizerController.getAllFertilizers);

// Route to add a new fertilizer
router.post('/', FertilizerController.addFertilizer);

module.exports = router;
