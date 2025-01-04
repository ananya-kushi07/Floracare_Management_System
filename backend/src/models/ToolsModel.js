const { isDbAvailable } = require('../config/dbConfig');

const ToolsModel = {
  getAllTools: (callback) => {
    if (isDbAvailable) {
      // Normal DB query (replace this with real MySQL code later)
      const query = 'SELECT T_id, T_name, T_type, T_PowerSource, T_image FROM tools';
      callback(null, query); // Simulate query response
    } else {
      // Mock Data
      const mockData = [
        {
          T_id: 1,
          T_name: "Shovel",
          T_type: "Hand Tool",
          T_PowerSource: "Manual",
          T_image: "https://gomulch.com/cdn/shop/products/RndShovelWebsitePic-1-06.png?v=1632950583&width=1200",
        },
        {
          T_id: 2,
          T_name: "Hoe",
          T_type: "Hand Tool",
          T_PowerSource: "Manual",
          T_image: "https://cdn.shopify.com/s/files/1/0757/5978/0145/files/ikj_3.jpg?v=1713340914",
        },
      ];
      callback(null, mockData);
    }
  },
  addTool: (toolData, callback) => {
    if (isDbAvailable) {
      // Insert a new tool into the database
      const query = 'INSERT INTO tools (T_name, T_type, T_PowerSource, T_image) VALUES (?, ?, ?, ?)';
      const values = [
        toolData.T_name,
        toolData.T_type,
        toolData.T_PowerSource,
        toolData.T_image,
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
