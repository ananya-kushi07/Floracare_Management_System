const PlantMaintenanceModel = {
    getAllMaintenanceRecords: (callback) => {
      if (isDbAvailable) {
        // Normal DB query (replace this with real MySQL code later)
        const query = 'SELECT * FROM plant_maintenance';
        callback(null, query); // Simulate query response
      } else {
        // Mock Data with additional fields
        const mockData = [
          {
            M_id: 1,
            P_id: 1,
            Maintenance_type: "Watering",
            Date: "2025-01-01",
            Notes: "Watered thoroughly in the morning.",
          },
          {
            M_id: 2,
            P_id: 2,
            Maintenance_type: "Fertilizing",
            Date: "2025-01-02",
            Notes: "Applied Miracle-Gro fertilizer.",
          },
        ];
        callback(null, mockData);
      }
    },
    addMaintenanceRecord: (maintenanceData, callback) => {
      if (isDbAvailable) {
        // Insert a new maintenance record into the database
        const query = 'INSERT INTO plant_maintenance (P_id, Maintenance_type, Date, Notes) VALUES (?, ?, ?, ?)';
        const values = [
          maintenanceData.P_id,
          maintenanceData.Maintenance_type,
          maintenanceData.Date,
          maintenanceData.Notes,
        ];
        db.query(query, values, (err, results) => {
          if (err) return callback(err, null);
          callback(null, results);
        });
      } else {
        // Simulate adding a maintenance record with mock data
        const mockResponse = {
          message: `Mock add successful: Maintenance for Plant ID ${maintenanceData.P_id}`,
          data: maintenanceData,
        };
        callback(null, mockResponse);
      }
    },
  };
  
  module.exports = PlantMaintenanceModel;
  