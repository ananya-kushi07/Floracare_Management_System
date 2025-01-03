const { isDbAvailable } = require('../config/dbConfig');

const ToolsModel = {
    getAllTools: (callback) => {
      if (isDbAvailable) {
        // Normal DB query (replace this with real MySQL code later)
        const query = 'SELECT * FROM tools';
        callback(null, query); // Simulate query response
      } else {
        // Mock Data
        const mockData = [
          {
            T_id: 1,
            T_name: "Pruning Shears",
            T_type: "Cutting",
            T_PowerSource: "Manual",
          },
          {
            T_id: 2,
            T_name: "Lawn Mower",
            T_type: "Mowing",
            T_PowerSource: "Electric",
          },
        ];
        callback(null, mockData);
      }
    },
    addTool: (toolData, callback) => {
      if (isDbAvailable) {
        // Insert a new tool into the database
        const query = 'INSERT INTO tools (T_name, T_type, T_PowerSource) VALUES (?, ?, ?)';
        const values = [
          toolData.T_name,
          toolData.T_type,
          toolData.T_PowerSource,
        ];
        db.query(query, values, (err, results) => {
          if (err) return callback(err, null);
          callback(null, results);
        });
      } else {
        // Simulate adding a tool with mock data
        const mockResponse = {
          message: `Mock add successful: ${toolData.T_name}`,
          data: toolData,
        };
        callback(null, mockResponse);
      }
    },
  };
  
  module.exports = ToolsModel;
  