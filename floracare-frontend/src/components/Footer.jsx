import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Footer() {
  const [email, setEmail] = useState(""); // State to hold the email input
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle sign up (redirect to login page)
  const handleSignUp = () => {
    if (email) {
      // You can add logic here to send the email to your backend or perform validation if needed
      navigate("/"); // Redirect to login page
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#4A6670", // Darker shade from navbar
        color: "white",
        padding: "40px 20px",
        marginTop: "auto", // Ensures footer is at the bottom of the page when content is short
      }}
    >
      {/* Grow Beautifully Section with Background Image */}
      <Box
        sx={{
          backgroundImage: 'url("https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg")', // Replace with your background image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "40px 0",
          textAlign: "center",
          borderBottom: `4px solid #A0AF84`,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#fffff", // Light Green Color
            fontWeight: "bold",
            marginBottom: 2,
          }}
        >
          Grow Beautifully
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Enter your email"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              width: "70%",
            }}
            value={email} // Bind the input value to the email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#668F80", // Muted Green
              "&:hover": { backgroundColor: "#A0AF84" },
            }}
            onClick={handleSignUp} // Handle sign up on button click
          >
            Sign Up
          </Button>
        </Box>
      </Box>

      {/* Social Media and Copyright */}
      <Grid
        container
        sx={{
          marginTop: 4,
          paddingTop: 2,
          borderTop: "1px solid #668F80",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Social Media Icons */}
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            Get in Touch
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton href="https://facebook.com" target="_blank" sx={{ color: "white" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://instagram.com" target="_blank" sx={{ color: "white" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" sx={{ color: "white" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://linkedin.com" target="_blank" sx={{ color: "white" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Copyright */}
        <Grid item xs={12} sm={6} textAlign={{ xs: "center", sm: "right" }}>
          <Typography variant="body2" sx={{ color: "#A0AF84" }}>
            © 2024 Grow Beautifully. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
