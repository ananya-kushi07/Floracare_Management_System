import React from "react";
import { Box, Container, Typography, Card, CardContent, Button, Grid2, Divider } from "@mui/material";
import Navbar from "./Navbar"; // Assuming Navbar is in the same directory
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      {/* Image with text */}
      <Box
        sx={{
          backgroundImage:
            'url("https://png.pngtree.com/thumb_back/fw800/background/20241219/pngtree-a-close-up-of-plant-with-vibrant-pink-and-orange-leaves-image_16821399.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 8,
          mx: 0,
          minWidth:"210vh"
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            textAlign: "center",
            textShadow: "3px 3px 5px rgba(0, 0, 0, 0.7)",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          Grow Beautifully
        </Typography>
      </Box>

      {/* Three Cards: Plants, Gardener, Fertilizer */}
      <Container sx={{ py: 4 ,minWidth:"200vh"}}>
        <Grid2 container spacing={4} justifyContent="center">
          {/* Plants Card */}
          <Grid2 item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A7D477", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Plants
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Discover a wide variety of plants to enhance your garden.
                </Typography>
                <Button
                  component={Link}
                  to="/plant"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Explore Plants
                </Button>
              </CardContent>
            </Card>
          </Grid2>

          {/* Gardener Card */}
          <Grid2 item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A7D477", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Gardener
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Connect with skilled gardeners for your garden's needs.
                </Typography>
                <Button
                  component={Link}
                  to="/gardener"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Find a Gardener
                </Button>
              </CardContent>
            </Card>
          </Grid2>

          {/* Fertilizer Card */}
          <Grid2 item xs={12} sm={4}>
            <Card sx={{ backgroundColor: "#A7D477", color: "#4A6670" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Fertilizer
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Explore the best fertilizers for your garden's growth.
                </Typography>
                <Button
                  component={Link}
                  to="/fertilizer"
                  sx={{
                    backgroundColor: "#4A6670",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#668F80",
                    },
                  }}
                >
                  Find Fertilizer
                </Button>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Container>

      {/* About Us Section */}
      <Container sx={{ py: 4,minWidth:"200vh",minHeight:"80vh" }}>
        <Divider sx={{ borderColor: "#4A6670", my: 2 }} />
        <Grid2 container spacing={4} alignItems="center">
          {/* About Us Text */}
          <Grid2 item xs={12} md={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "#4A6670", mb: 2 }}
            >
              About Us
            </Typography>
            <Typography sx={{ color: "#4A6670", lineHeight: 1.6 }}>
              We are dedicated to bringing life to your gardens with our diverse
              range of plants, expert gardening services, and quality
              fertilizers. Our mission is to help you create a thriving and
              beautiful green space.
            </Typography>
          </Grid2>

          {/* Image Pile */}
          <Grid2 item xs={12} md={6}>
            <Box sx={{ position: "relative", height: "300px", width: "100%" }}>
              {/* Placeholder Images */}
              <Box
                component="img"
                src="https://static.vecteezy.com/system/resources/previews/034/415/595/non_2x/a-beautiful-stunning-flower-garden-bursting-with-vibrant-generated-by-ai-photo.jpg"
                alt="Placeholder 1"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "20%",
                  width: "150px",
                  height: "150px",
                  boxShadow: 3,
                  transform: "rotate(-10deg)",
                }}
              />
              <Box
                component="img"
                src="https://www.rhs.org.uk/getmedia/0b27ab69-9459-4445-9a07-4656e4d7b1dd/king-charles-in-garden-at-highgrove.jpg?width=940&height=627&ext=.jpg"
                alt="Placeholder 2"
                sx={{
                  position: "absolute",
                  top: "40%",
                  left: "50%",
                  width: "120px",
                  height: "120px",
                  boxShadow: 3,
                  transform: "rotate(15deg)",
                }}
              />
              <Box
                component="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbehs6RuEkVc-p2Rieb_Mr0IHMrqZlJH_U4w&s"
                alt="Placeholder 3"
                sx={{
                  position: "absolute",
                  top: "70%",
                  left: "10%",
                  width: "140px",
                  height: "140px",
                  boxShadow: 3,
                  transform: "rotate(-5deg)",
                }}
              />
            </Box>
          </Grid2>
        </Grid2>
        <Divider sx={{ borderColor: "#4A6670", my: 2 }} />
      </Container>
    </div>
  );
}

export default Home;
