const MaintenanceModel = require('../models/maintenanceModel');

const MaintenanceController = {
  getAllMaintenanceRecords: (req, res) => {
    MaintenanceModel.getAllMaintenanceRecords((err, results) => {
      if (err) return res.status(500).send(err);
      res.status(200).json(results);
    });
  },
  addMaintenanceRecord: (req, res) => {
    const newMaintenanceRecord = req.body;
    MaintenanceModel.addMaintenanceRecord(newMaintenanceRecord, (err, results) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ message: "Maintenance record added successfully", data: results });
    });
  },
};

module.exports = MaintenanceController;
