import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
<<<<<<< HEAD
import Footer from "../../components/Footer";

const gardeners = [
  { id: 1, name: "John Doe", bio: "Expert in landscape gardening", image: "https://c8.alamy.com/comp/H7927P/chris-beardshaw-award-winning-british-gardener-known-for-his-work-H7927P.jpg" },
  { id: 2, name: "Jane Smith", bio: "Specialist in urban gardening", image: "https://www.theglobeandmail.com/resizer/v2/7GKCAZJ3GBBB3LDHSOKBIZ364A.JPG?auth=770c111afc6b60f190e2e4785452026dffe0796cd5cc5c11ec589565bf91db3f&width=1200&height=800&quality=80&smart=true" },
  { id: 3, name: "Sam Wilson", bio: "Organic farming enthusiast", image: "https://img.freepik.com/premium-photo/serious-male-gardener-checking-fresh-plants-hothouse_641503-140572.jpg" },
];
=======
import axios from "axios"; // For making API requests
>>>>>>> bb38e7f5e220deacd805e920d530ffa9d8de2e87

function GardenerPage() {
  const [gardeners, setGardeners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch gardeners from backend
  useEffect(() => {
    const fetchGardeners = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/gardeners"); // Update this to your backend endpoint
        setGardeners(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gardeners:", error);
        setLoading(false);
      }
    };

    fetchGardeners();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gardeners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gardeners.length) % gardeners.length);
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h5">Loading gardeners...</Typography>
      </Box>
    );
  }

  if (gardeners.length === 0) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Typography variant="h5">No gardeners available.</Typography>
      </Box>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#EAF4F4", minHeight: "100vh", padding: "20px" }}>
        <Typography variant="h3" align="center" sx={{ marginBottom: "40px", color: "#4A6670", my: "27px" }}>
          Meet Our Gardeners
        </Typography>

        {/* Carousel Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
            height: "500px",
          }}
        >
          {gardeners.map((gardener, index) => {
            const position =
              index === currentIndex
                ? "center"
                : index === (currentIndex - 1 + gardeners.length) % gardeners.length
                ? "left"
                : "right";

            return (
              <Card
                key={gardener.G_id} // Assuming G_id is the primary key
                component={Link}
                to={`/gardener/${gardener.G_id}`}
                sx={{
                  position: "absolute",
                  width: "300px",
                  height: "400px",
                  transition: "transform 0.5s ease, opacity 0.5s ease",
                  transform: {
                    center: "scale(1.2)",
                    left: "translateX(-120%) scale(0.8)",
                    right: "translateX(120%) scale(0.8)",
                  }[position],
                  opacity: position === "center" ? 1 : 0.5,
                  backgroundColor: "#668F80",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <CardMedia
                  component="img"
                  image={gardener.G_image} // Assuming G_image is the image field in the database
                  alt={gardener.G_name}
                  sx={{ height: "60%", objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h5" align="center">
                    {gardener.G_name} {/* Assuming G_name is the name field */}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {gardener.G_bio} {/* Assuming G_bio is the bio field */}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>

        {/* Navigation Buttons */}
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Button
            onClick={prevSlide}
            sx={{
              marginRight: "10px",
              backgroundColor: "#4A6670",
              color: "white",
              "&:hover": { backgroundColor: "#668F80" },
            }}
          >
            Previous
          </Button>
          <Button
            onClick={nextSlide}
            sx={{
              backgroundColor: "#4A6670",
              color: "white",
              "&:hover": { backgroundColor: "#668F80" },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
<<<<<<< HEAD
    </Box>
    <Footer/>
=======
>>>>>>> bb38e7f5e220deacd805e920d530ffa9d8de2e87
    </>
  );
}

export default GardenerPage;