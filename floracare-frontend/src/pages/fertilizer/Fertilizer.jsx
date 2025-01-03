import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Footer";
import { Box, Card, CardContent, Typography, CardMedia, Grid2,Button } from '@mui/material';
import Navbar from "../../components/Navbar";

const FertilizersList = () => {
  const [fertilizers, setFertilizers] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get('http://localhost:5000/api/fertilizers') // Update this URL based on your API
      .then((response) => {
        // Ensure the data is an array
        const data = Array.isArray(response.data) ? response.data : [];
        setFertilizers(data);
      })
      .catch((error) => {
        console.error("Error fetching fertilizers:", error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <Box sx={{ p: 3, pt: 10 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: "black" }}>
        🌿 Fertilizers Collection 🌿
      </Typography>
      <Grid2
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        {fertilizers.map((fertilizer) => (
          <Grid2 item xs={12} sm={6} md={4} lg={3} key={fertilizer.F_id}>
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
                image={fertilizer.image || "https://via.placeholder.com/200"} // Use actual image URL
                alt={fertilizer.F_name}
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
                  {fertilizer.F_name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Price: ${fertilizer.Price}
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Expiry Date: {new Date(fertilizer.Expiry_date).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" sx={{ color: "#616161" }}>
                  Quality Level: {fertilizer.Quality_level}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={fertilizer.link} // Link to external page
                  target="_blank"
                  sx={{ mt: 2 }}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
     <Footer/>
     </>
  );
};

export default FertilizersList;
