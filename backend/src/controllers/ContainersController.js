const ContainersModel = require('../models/ContainersModel');

const ContainersController = {
  getAllContainers: (req, res) => {
    ContainersModel.getAllContainers((err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(results);
    });
  },
  addContainer: (req, res) => {
    const newContainer = req.body;
    ContainersModel.addContainer(newContainer, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: "Container added successfully", data: results });
    });
  },
};

module.exports = ContainersController;
