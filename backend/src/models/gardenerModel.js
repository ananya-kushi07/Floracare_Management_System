const { isDbAvailable } = require('../config/dbConfig');

const GardenerModel = {
    getAllGardeners: (callback) => {
        if (isDbAvailable) {
            // Actual DB query (replace with real MySQL code later)
            const query = 'SELECT * FROM gardeners';
            db.query(query, (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            });
        } else {
            // Mock Data
            const mockData = [
                {
                    "G_id": 1,
                    "G_name": "Alice",
                    "Phone": "123-456-7890",
                    "Experience_level": "Intermediate",
                    "Specialization": "Organic Gardening",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJjHEb-A1reWtQ8WqIOl1L-3_riWBMmKT2og&s", 
                    "email": "alice@example.com",
                    "password": "alice123",
                },
                {
                    "G_id": 2,
                    "G_name": "Bob",
                    "Phone": "234-567-8901",
                    "Experience_level": "Beginner",
                    "Specialization": "Indoor Gardening",
                    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Ka72oMSjkoenCROoSOgMIBUJi8gLjsYcMt4rWnLbnpf0V58nan9weG6mkGRv015C9ys&usqp=CAU",
                    "email":"bob@example.com",
                    "password":"bob123",
                }];
            callback(null, mockData);
        }
    },
    addGardener: (gardenerData, callback) => {
        if (isDbAvailable) {
            // Insert a new gardener into the database
            const query = 'INSERT INTO gardeners (G_name, Phone, Experience_level, Specialization, image, isAdmin,email,password) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
            const values = [
                gardenerData.G_name,
                gardenerData.Phone,
                gardenerData.Experience_level,
                gardenerData.Specialization,
                gardenerData.image,
                gardenerData.isAdmin,
                gardenerData.email,
                gardenerData.password,
            ];
            db.query(query, values, (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            });
        } else {
            // Simulate adding a gardener with mock data
            const mockResponse = {
                message: `Mock add successful: ${gardenerData.G_name}`,
                data: gardenerData,
            };
            callback(null, mockResponse);
        }
    },
};

module.exports = GardenerModel;
