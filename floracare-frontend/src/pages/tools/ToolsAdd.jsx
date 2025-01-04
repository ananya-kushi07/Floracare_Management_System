import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box, Card, CardContent, Typography, CardMedia, Grid, Fab } from "@mui/material";
import ToolsPage from "./ToolsPage";
import { Add, Close } from "@mui/icons-material";

const ToolPage = () => {
  return (
    <Box sx={{ p: 3, pt: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "black" }}>
        🛠️ Add or Manage Tools 🛠️
      </Typography>
      {/* Add tool management logic here */}
    </Box>
  );
};

const ToolAdd = () => {
  const [tools, setTools] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("http://localhost:5000/api/tools")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setTools(data);
      })
      .catch((error) => {
        console.error("Error fetching tools:", error);
      });
  }, []);

  return (
    <>
      {!open ? (
        <Box sx={{ p: 3, pt: 10 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: "black" }}>
            🛠️ Tools Collection ⚙️
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {tools.map((tool) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={tool.T_id}>
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
                    image={tool.T_image || "https://via.placeholder.com/200"}
                    alt={tool.T_name}
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
                      {tool.T_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      Type: {tool.T_type}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      Power Source: {tool.T_PowerSource}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : <ToolsPage />}
      <Fab color={open ? 'error' : "success"} aria-label="add"  sx={{ position: 'fixed', bottom: 16, right: 16 }} onClick={() => setOpen(p => !p)}>
          {open ? <Close /> :<Add  />}
        </Fab>
    </>
  );
};

export default ToolAdd;
