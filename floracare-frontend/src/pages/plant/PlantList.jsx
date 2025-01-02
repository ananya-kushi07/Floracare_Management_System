import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, CardMedia,Grid2 } from '@mui/material';

const PlantsList = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        // Fetch data from backend
        axios
            .get('http://localhost:5000/api/plants')
            .then((response) => {
                // console.log("API Response:", response.data); // Debug the API response
                const data = Array.isArray(response.data) ? response.data : []; // Ensure data is an array
                setPlants(data);
            })
            .catch((error) => {
                console.error("Error fetching plants:", error);
            });
    }, []);

    return (
        <Box sx={{ p: 3,pt: 10  }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 ,color: "black" }}>
        🌱 Beautiful Plants Collection 🌿
      </Typography>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {plants.map((plant) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={plant.P_id}>
            <Card
              sx={{
                maxWidth: 500,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                height="350"
                image={plant.photo_url || "https://via.placeholder.com/200"}
                alt={plant.P_name}
                sx={{
                  objectFit: "cover",
                  filter: "brightness(100%)",
                  "&:hover": { filter: "brightness(100%)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    color: "#4CAF50",
                  }}
                >
                  {plant.P_name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Type: {plant.P_type}
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Age: {plant.Age} years
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Life Span: {plant.Life_span} years
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Planting Season: {plant.Planting_season}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
    );
};

export default PlantsList;
