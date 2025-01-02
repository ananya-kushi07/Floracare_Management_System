const { default: PlantList } = require("../../../floracare-frontend/src/pages/plant/PlantList");

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
    addPlant: (PlantList, callback) => {
        if (isDbAvailable) {
            // Normal DB insertion (replace with actual code later)
            callback(null, `Plant ${PlantList.P_name} added`);
        } else {
            // Mock Data response
            callback(null, { message: "Mock add successful", data: PlantsList });
        }
    },
};

module.exports = PlantsModel;
