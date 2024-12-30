import React, { useState } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
// import john from "../../assets/john.jpg";
import Navbar from "../../components/Navbar";

const gardeners = [
  { id: 1, name: "John Doe", bio: "Expert in landscape gardening", image: "https://c8.alamy.com/comp/H7927P/chris-beardshaw-award-winning-british-gardener-known-for-his-work-H7927P.jpg" },
  { id: 2, name: "Jane Smith", bio: "Specialist in urban gardening", image: "https://www.theglobeandmail.com/resizer/v2/7GKCAZJ3GBBB3LDHSOKBIZ364A.JPG?auth=770c111afc6b60f190e2e4785452026dffe0796cd5cc5c11ec589565bf91db3f&width=1200&height=800&quality=80&smart=true" },
  { id: 3, name: "Sam Wilson", bio: "Organic farming enthusiast", image: "https://img.freepik.com/premium-photo/serious-male-gardener-checking-fresh-plants-hothouse_641503-140572.jpg" },
];

function GardenerPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gardeners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + gardeners.length) % gardeners.length);
  };

  return (
    <>
    <Navbar/>
    <Box sx={{ backgroundColor: "#0AF84", minHeight: "100vh", padding: "20px" }}>
      <Typography variant="h3" align="center" sx={{ marginBottom: "40px", color: "#4A6670",my:"27px" }}>
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
              key={gardener.id}
              component={Link}
              to={`/gardener/${gardener.id}`}
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
                image={gardener.image}
                alt={gardener.name}
                sx={{ height: "60%", objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h5" align="center">
                  {gardener.name}
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
    </>
  );
}

export default GardenerPage;
