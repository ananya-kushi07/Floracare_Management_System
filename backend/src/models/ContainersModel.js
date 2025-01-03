const { isDbAvailable } = require('../config/dbConfig');

const ContainersModel = {
    getAllContainers: (callback) => {
      if (isDbAvailable) {
        // Normal DB query (replace this with real MySQL code later)
        const query = 'SELECT * FROM containers';
        callback(null, query); // Simulate query response
      } else {
        // Mock Data
        const mockData = [
          {
            C_id: 1,
            C_name: "Terracotta Pot",
            Material: "Clay",
            Size: "Medium",
            Color: "Brown",
          },
          {
            C_id: 2,
            C_name: "Plastic Planter",
            Material: "Plastic",
            Size: "Large",
            Color: "Green",
          },
        ];
        callback(null, mockData);
      }
    },
    addContainer: (containerData, callback) => {
      if (isDbAvailable) {
        // Insert a new container into the database
        const query = 'INSERT INTO containers (C_name, Material, Size, Color) VALUES (?, ?, ?, ?)';
        const values = [
          containerData.C_name,
          containerData.Material,
          containerData.Size,
          containerData.Color,
        ];
        db.query(query, values, (err, results) => {
          if (err) return callback(err, null);
          callback(null, results);
        });
      } else {
        // Simulate adding a container with mock data
        const mockResponse = {
          message: `Mock add successful: ${containerData.C_name}`,
          data: containerData,
        };
        callback(null, mockResponse);
      }
    },
  };
  
  module.exports = ContainersModel;
  