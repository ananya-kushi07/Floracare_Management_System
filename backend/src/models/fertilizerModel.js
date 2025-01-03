const { isDbAvailable } = require('../config/dbConfig');

const FertilizerModel = {
    getAllFertilizers: (callback) => {
        if (isDbAvailable) {
            // Actual DB query (replace with real MySQL code later)
            const query = 'SELECT * FROM fertilizers';
            db.query(query, (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            });
        } else {
            // Mock Data
            const mockData = [
                {
                    F_id: 1,
                    F_name: "Miracle-Gro",
                    Price: 19.99,
                    Expiry_date: "2024-12-31",
                    Quality_level: "High",
                    image: "https://m.media-amazon.com/images/I/71Y4bs-ICrL._AC_UF1000,1000_QL80_.jpg", // Replace with actual image URL
                    link: "https://en.wikipedia.org/wiki/Miracle-Gro", // Link to details page
                  },
                  {
                    F_id: 2,
                    F_name: "Compost",
                    Price: 9.99,
                    Expiry_date: "2025-06-30",
                    Quality_level: "Medium",
                    image: "https://media.istockphoto.com/id/479440915/photo/compost-with-composted-earth.jpg?s=612x612&w=0&k=20&c=P5u2ACtdpVOZETebKudOz7RFL3b6EqY-2uQOrQ2_bdA=", // Replace with actual image URL
                    link: "https://en.wikipedia.org/wiki/Compost", // Link to details page
                  },
            ];
            callback(null, mockData);
        }
    },
    addFertilizer: (fertilizerData, callback) => {
        if (isDbAvailable) {
            // Insert a new fertilizer into the database
            const query = 'INSERT INTO fertilizers (F_name, Price, Expiry_date, Quality_level, image) VALUES (?, ?, ?, ?, ?)';
            const values = [
                fertilizerData.F_name,
                fertilizerData.Price,
                fertilizerData.Expiry_date,
                fertilizerData.Quality_level,
                fertilizerData.image,
                fertilizerData.link,
            ];
            db.query(query, values, (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            });
        } else {
            // Simulate adding a fertilizer with mock data
            const mockResponse = {
                message: `Mock add successful: ${fertilizerData.F_name}`,
                data: fertilizerData,
            };
            callback(null, mockResponse);
        }
    },
};

module.exports = FertilizerModel;
