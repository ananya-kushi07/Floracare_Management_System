const { isDbAvailable } = require('../config/dbConfig');

const PlantsModel = {
    getAllPlants: (callback) => {
        if (isDbAvailable) {
            // Normal DB query (replace this with real MySQL code later)
            const query = 'SELECT * FROM Plants';
            callback(null, query); // Simulate query response
        } else {
            // Mock Data
            const mockData = [
                { P_id: 1, P_name: "Rose", P_type: "Flowering", Age: 2 },
                { P_id: 2, P_name: "Tulip", P_type: "Flowering", Age: 1 },
            ];
            callback(null, mockData);
        }
    },
    addPlant: (plantData, callback) => {
        if (isDbAvailable) {
            // Normal DB insertion (replace with actual code later)
            callback(null, `Plant ${plantData.P_name} added`);
        } else {
            // Mock Data response
            callback(null, { message: "Mock add successful", data: plantData });
        }
    },
};

module.exports = PlantsModel;
