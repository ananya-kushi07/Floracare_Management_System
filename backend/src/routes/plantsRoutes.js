const express = require('express');
const PlantsController = require('../controllers/plantsControllers');
const router = express.Router();


// console.log('Path test:', require.resolve('../controllers/plantsController'));

// Route to get all plants
router.get('/', PlantsController.getAllPlants);

// Route to add a new plant
router.post('/', PlantsController.addPlant);

module.exports = router;
