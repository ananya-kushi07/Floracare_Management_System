import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const gardeners = [
  {
    id: 1,
    name: "John Doe",
    bio: "Expert in landscape gardening with 10 years of experience.",
    details:
      "John has worked on numerous landscaping projects across the country, focusing on eco-friendly designs.",
    image: "https://c8.alamy.com/comp/H79285/chris-beardshaw-award-winning-british-gardener-known-for-his-work-H79285.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    bio: "Specializes in organic gardening and sustainable practices.",
    details:
      "Jane is renowned for her expertise in organic gardening methods that prioritize soil health.",
    image: "https://images.squarespace-cdn.com/content/v1/61e1abe744f8dd3b789d8619/1667603921066-8K33QRVQHMARU0390QUN/CarlosMoniz.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    bio: "A passionate gardener focusing on urban green spaces.",
    details:
      "Michael's mission is to transform urban areas into vibrant green spaces through innovative designs.",
    image: "https://img.freepik.com/premium-photo/serious-male-gardener-checking-fresh-plants-hothouse_641503-140572.jpg",
  },
];

function GardenerDetail() {
  const { id } = useParams();
  const gardener = gardeners.find((g) => g.id === parseInt(id));

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
          src={gardener.image}
          alt={gardener.name}
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
            }}
          >
            {gardener.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "#4A6670", mb: 4 }}>
            {gardener.bio}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "#4A6670",
            }}
          >
            {gardener.details}
          </Typography>
        </Box>
      </motion.div>
    </Box>
    <Footer/>
    </>
  );
}

export default GardenerDetail;
