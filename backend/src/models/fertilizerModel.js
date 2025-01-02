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
                {
                    F_id: 1,
                    F_name: "Miracle-Gro",
                    Price: 19.99,
                    Expiry_date: "2024-12-31",
                    Quality_level: "High",
                    image: "https://via.placeholder.com/150?text=Miracle-Gro", // Replace with actual image URL
                    link: "/fertilizer/1", // Link to details page
                  },
                  {
                    F_id: 2,
                    F_name: "Compost",
                    Price: 9.99,
                    Expiry_date: "2025-06-30",
                    Quality_level: "Medium",
                    image: "https://via.placeholder.com/150?text=Compost", // Replace with actual image URL
                    link: "/fertilizer/2", // Link to details page
                  },
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
