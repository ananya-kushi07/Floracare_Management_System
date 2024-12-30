const FertilizerModel = require('../models/fertilizerModel');

const FertilizerController = {
    getAllFertilizers: (req, res) => {
        FertilizerModel.getAllFertilizers((err, results) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(results);
        });
    },
    addFertilizer: (req, res) => {
        const newFertilizer = req.body;
        FertilizerModel.addFertilizer(newFertilizer, (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ message: "Fertilizer added successfully", data: results });
        });
    },
};

module.exports = FertilizerController;
