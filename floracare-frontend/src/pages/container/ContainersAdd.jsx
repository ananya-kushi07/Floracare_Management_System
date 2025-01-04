import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, Typography, CardMedia, Grid, Fab } from "@mui/material";
import ContainersPage from './ContainersPage';
import { Add, Close } from "@mui/icons-material";

const ContainerPage = () => {
  return (
    <Box sx={{ p: 3, pt: 10 }}>
      <Typography variant="h4" align="center" sx={{ mb: 4, color: "black" }}>
        🛢️ Add or Manage Containers 🛢️
      </Typography>
      {/* Add container management logic here */}
    </Box>
  );
};

const ContainerAdd = () => {
  const [containers, setContainers] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch data from backend
    axios
      .get("http://localhost:5000/api/containers")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : [];
        setContainers(data);
      })
      .catch((error) => {
        console.error("Error fetching containers:", error);
      });
  }, []);

  return (
    <>
      {!open ? (
        <Box sx={{ p: 3, pt: 10 }}>
          <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: "black" }}>
            🛢️ Container Collection 📦
          </Typography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {containers.map((container) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={container.C_id}>
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
                    image={container.C_image || "https://via.placeholder.com/200"}
                    alt={container.C_name}
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
                      {container.C_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      Material: {container.Material}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      Size: {container.Size}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#616161" }}>
                      Color: {container.Color}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : (
        <ContainersPage />
      )}
      <Fab color={open ? 'error' : "success"} aria-label="add" sx={{ position: 'fixed', bottom: 16, right: 16 }} onClick={() => setOpen((p) => !p)}>
        {open ? <Close /> : <Add />}
      </Fab>
    </>
  );
};

export default ContainerAdd;
