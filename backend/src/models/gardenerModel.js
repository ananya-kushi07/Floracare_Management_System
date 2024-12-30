const { isDbAvailable } = require('../config/dbConfig');

const GardenerModel = {
    getAllGardeners: (callback) => {
        if (isDbAvailable) {
            // Actual DB query (replace with real MySQL code later)
            const query = 'SELECT * FROM gardeners';
            callback(null, query); // Simulate query response
        } else {
            // Mock Data
            const mockData = [
                { G_id: 1, G_name: "John Doe", Phone: "9876543210", Experience_level: "Beginner", Specialization: "Vegetable Gardening" },
                { G_id: 2, G_name: "Jane Smith", Phone: "9123456789", Experience_level: "Intermediate", Specialization: "Organic Gardening" },
            ];
            callback(null, mockData);
        }
    },
    addGardener: (gardenerData, callback) => {
        if (isDbAvailable) {
            // Actual DB insertion (replace with actual code later)
            callback(null, `Gardener ${gardenerData.G_name} added`);
        } else {
            // Mock Data response
            callback(null, { message: "Mock add successful", data: gardenerData });
        }
    },
};

module.exports = GardenerModel;
