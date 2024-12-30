const express = require('express');
const GardenerController = require('../controllers/gardenerController');
const router = express.Router();

// Route to get all gardeners
router.get('/', GardenerController.getAllGardeners);

// Route to add a new gardener
router.post('/', GardenerController.addGardener);

module.exports = router;
