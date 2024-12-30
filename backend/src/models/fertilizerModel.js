const { isDbAvailable } = require('../config/dbConfig');

const FertilizerModel = {
    getAllFertilizers: (callback) => {
        if (isDbAvailable) {
            // Actual DB query (replace with real MySQL code later)
            const query = 'SELECT * FROM fertilizers';
            callback(null, query); // Simulate query response
        } else {
            // Mock Data
            const mockData = [
                { F_id: 1, F_name: "Compost", Price: 50, Expiry_date: "2025-12-31", Quality_level: "High" },
                { F_id: 2, F_name: "Organic Fertilizer", Price: 30, Expiry_date: "2024-06-30", Quality_level: "Medium" },
            ];
            callback(null, mockData);
        }
    },
    addFertilizer: (fertilizerData, callback) => {
        if (isDbAvailable) {
            // Actual DB insertion (replace with actual code later)
            callback(null, `Fertilizer ${fertilizerData.F_name} added`);
        } else {
            // Mock Data response
            callback(null, { message: "Mock add successful", data: fertilizerData });
        }
    },
};

module.exports = FertilizerModel;
