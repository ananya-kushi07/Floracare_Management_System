const GardenerModel = require('../models/gardenerModel');

const GardenerController = {
    getAllGardeners: (req, res) => {
        GardenerModel.getAllGardeners((err, results) => {
            if (err) return res.status(500).send(err);
            res.status(200).json(results);
        });
    },
    addGardener: (req, res) => {
        const newGardener = req.body;
        GardenerModel.addGardener(newGardener, (err, results) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ message: "Gardener added successfully", data: results });
        });
    },
};

module.exports = GardenerController;
