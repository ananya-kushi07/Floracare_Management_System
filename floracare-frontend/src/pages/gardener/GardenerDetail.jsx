import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import axios from "axios"; // For making API requests

function GardenerDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const [gardener, setGardener] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch gardener details from backend
  useEffect(() => {
    const fetchGardenerDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/gardeners/${id}`);
        setGardener(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching gardener details:", error);
        setLoading(false);
      }
    };

    fetchGardenerDetails();
  }, [id]); // Fetch data whenever the ID changes

  if (loading) {
    return (
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "#4A6670", mt: 4 }}
      >
        Loading gardener details...
      </Typography>
    );
  }

  if (!gardener) {
    return (
      <Typography
        variant="h6"
        sx={{ textAlign: "center", color: "#4A6670", mt: 4 }}
      >
        Gardener not found.
      </Typography>
    );
  }

  return (
    <>
    <Navbar/>
    <Box sx={{ display: "flex", alignItems: "center", p: 4, gap: 4 ,my:"35px"}}>
      {/* Left Side - Image */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          flex: 1,
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src={gardener.image || "https://via.placeholder.com/200"} // Fallback to placeholder if image is missing
          alt={gardener.G_name}
          style={{ width: "100%", height: "auto" }}
        />
      </motion.div>

      {/* Middle Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{
          backgroundColor: "#668F80",
          width: "4px",
          borderRadius: "4px",
        }}
      />

      {/* Right Side - Details */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ flex: 2 }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#4A6670",
              mb: 2,
              pt:10
            }}
          >
            {gardener.G_name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#4A6670", mb: 2 }}>
            <strong>Phone:</strong> {gardener.Phone}
          </Typography>
          <Typography variant="body1" sx={{ color: "#4A6670", mb: 2 }}>
            <strong>Experience Level:</strong> {gardener.Experience_level}
          </Typography>
          <Typography variant="body1" sx={{ color: "#4A6670", mb: 4 }}>
            <strong>Specialization:</strong> {gardener.Specialization}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "1.1rem", lineHeight: 1.8, color: "#4A6670", mb: 4 }}>
            <strong>Feeling in the field:</strong> {gardener.Feeling_in_field || "Gardener's passion for this field is unparalleled, and they find joy in nurturing plants and helping others connect with nature.It has helped me to boost my confidence. The gardening experience and process taught me that each day a new leaf grows and the old one falls. So, we should never get upset about our failures as each day brings new opportunities. And the main and most importantly I learned patience."}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#4A6670",
            }}
          >
            {/* You can add any other details here if needed */}
          </Typography>
        </Box>
      </motion.div>
    </Box>
    <Footer/>
    </>
  );
}

export default GardenerDetail;
