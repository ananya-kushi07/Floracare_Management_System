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
                {
                    "G_id": 1,
                    "G_name": "Alice",
                    "Phone": "123-456-7890",
                    "Experience_level": "Intermediate",
                    "Specialization": "Organic Gardening",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjHEb-A1reWtQ8WqIOl1L-3_riWBMmKT2og&s"
                },
                {
                    "G_id": 2,
                    "G_name": "Bob",
                    "Phone": "234-567-8901",
                    "Experience_level": "Beginner",
                    "Specialization": "Indoor Gardening",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ka72oMSjkoenCROoSOgMIBUJi8gLjsYcMt4rWnLbnpf0V58nan9weG6mkGRv015C9ys&usqp=CAU"
                }];
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
