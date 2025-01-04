const db = require('../config/dbConfig');  // Import the db configuration
const { isDbAvailable } = require('../config/dbConfig');  // Import the availability check

const ContainersModel = {
  // Get all containers
  getAllContainers: (callback) => {
    if (isDbAvailable) {
      // Normal DB query
      const query = 'SELECT * FROM containers';
      db.query(query, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results); // Return actual query results
      });
    } else {
      // Mock Data
      const mockData = [
        {
          C_id: 1,
          C_name: "Terracotta Pot",
          Material: "Clay",
          Size: "Medium",
          Color: "Brown",
          C_image: "https://5.imimg.com/data5/AZ/LN/VJ/SELLER-71793185/terracotta-deroma-plant-pots.jpg", // Add mock image
        },
        {
          C_id: 2,
          C_name: "Plastic Planter",
          Material: "Plastic",
          Size: "Large",
          Color: "Green",
          C_image: "https://www.theplantshop.in/cdn/shop/files/flower-pots-decorative-planters-made-from-plastic-in-vibrant-colors-163448.jpg?v=1716137451&width=1445", // Add mock image
        },
      ];
      callback(null, mockData); // Return mock data
    }
  },

  // Add a new container
  addContainer: (containerData, callback) => {
    if (isDbAvailable) {
      // Insert a new container into the database
      const query = 'INSERT INTO containers (C_name, Material, Size, Color, C_image) VALUES (?, ?, ?, ?, ?)';
      const values = [
        containerData.C_name,
        containerData.Material,
        containerData.Size,
        containerData.Color,
        containerData.C_image, // Ensure C_image is included
      ];
      db.query(query, values, (err, results) => {
        if (err) return callback(err, null);
        callback(null, results); // Return the results of the insert query
      });
    } else {
      // Simulate adding a container with mock data
      const mockResponse = {
        message: `Mock add successful: ${containerData.C_name}`,
        data: containerData,
      };
      callback(null, mockResponse); // Return mock response
    }
  },
};

module.exports = ContainersModel;
