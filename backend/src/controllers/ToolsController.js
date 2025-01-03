const ToolsModel = require('../models/ToolsModel');

const ToolsController = {
  getAllTools: (req, res) => {
    ToolsModel.getAllTools((err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(results);
    });
  },
  addTool: (req, res) => {
    const newTool = req.body;
    ToolsModel.addTool(newTool, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: "Tool added successfully", data: results });
    });
  },
};

module.exports = ToolsController;
