const PlantsModel = require('../models/plantsModel');

const PlantsController = {
    getAllPlants: (req, res) => {
        PlantsModel.getAllPlants((err, results) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(results);
        });
    },
    addPlant: (req, res) => {
        const newPlant = req.body;
        PlantsModel.addPlant(newPlant, (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ message: "Plant added successfully", data: results });
        });
    },
};

module.exports = PlantsController;
