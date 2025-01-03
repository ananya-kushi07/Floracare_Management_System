//const { default: PlantList } = require("../../../floracare-frontend/src/pages/plant/PlantList");

const PlantsModel = {
    getAllPlants: (callback) => {
        if (isDbAvailable) {
            // Normal DB query (replace this with real MySQL code later)
            const query = 'SELECT * FROM plants';
            callback(null, query); // Simulate query response
        } else {
            // Mock Data with additional fields
            const mockData = [
                {
                    P_id: 1,
                    P_name: "Rose",
                    P_type: "Flowering",
                    Age: 2,
                    Life_span: 5,
                    Planting_season: "Spring",
                    photo_url: "https://cms.interiorcompany.com/wp-content/uploads/2024/01/lincoln-red-rose-bush-types.jpg",
                },
                {
                    P_id: 2,
                    P_name: "Tulip",
                    P_type: "Flowering",
                    Age: 1,
                    Life_span: 3,
                    Planting_season: "Spring",
                    photo_url: "https://media.istockphoto.com/id/169977992/photo/yellow-tulips.jpg?s=612x612&w=0&k=20&c=0XGWY6p0HRlp_dAAB_eFmuXUQGcz9mVZHp5LHrNeLig=",
                },
            ];
            callback(null, mockData);
        }
    },
    addPlant: (plantData, callback) => {
        if (isDbAvailable) {
            // Insert a new plant into the database
            const query = 'INSERT INTO plants (P_name, P_type, Age, Life_span, Planting_season, photo_url) VALUES (?, ?, ?, ?, ?, ?)';
            const values = [
                plantData.P_name,
                plantData.P_type,
                plantData.Age,
                plantData.Life_span,
                plantData.Planting_season,
                plantData.photo_url,
            ];
            db.query(query, values, (err, results) => {
                if (err) return callback(err, null);
                callback(null, results);
            });
        } else {
            // Simulate adding a plant with mock data
            const mockResponse = {
                message: `Mock add successful: ${plantData.P_name}`,
                data: plantData,
            };
            callback(null, mockResponse);
        }
    },
};

module.exports = PlantsModel;

