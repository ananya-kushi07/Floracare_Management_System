import React, { useEffect, useState } from "react";
import axios from "axios";

const PlantsList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Fetch data from backend
        axios
            .get("/api/plants")
            .then((response) => {
                setPlants(response.data);
            })
            .catch((error) => {
                console.error("Error fetching plants:", error);
            });
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Plants List</h1>
            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    margin: "20px 0",
                    fontSize: "18px",
                    textAlign: "left",
                }}
            >
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Photo</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Type</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Life Span</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Planting Season</th>
                    </tr>
                </thead>
                <tbody>
                    {plants.length > 0 ? (
                        plants.map((plant) => (
                            <tr key={plant.P_id}>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                    <img
                                        src={plant.photo_url}
                                        alt={plant.P_name}
                                        style={{ width: "100px", height: "auto", borderRadius: "8px" }}
                                    />
                                </td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{plant.P_name}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{plant.P_type}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{plant.Age}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{plant.Life_span}</td>
                                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{plant.Planting_season}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td
                                colSpan="6"
                                style={{
                                    textAlign: "center",
                                    padding: "20px",
                                    fontSize: "18px",
                                    color: "gray",
                                }}
                            >
                                No plants available.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PlantsList;
