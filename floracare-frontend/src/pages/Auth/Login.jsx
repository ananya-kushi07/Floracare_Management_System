import React from "react";
import { Box, Grid, Card, Typography, TextField, Button, Link, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., validate email and password)
    // After successful login, redirect to home
    navigate("/Home");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side - Login Section */}
      <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{
            width: "80%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            paddingRight: { xs: 0, md: 3 },
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Admin Login
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationColor: "#4caf50",
              textDecorationThickness: "4px",
              marginBottom: 1,
            }}
          >
            Registered Admin
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            If you have an account, log in with your email.
          </Typography>
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Login
          </Button>
             
        </Box>
      </Grid>

      {/* Vertical Divider */}
      <Grid item xs={1} sx={{ display: { xs: "none", md: "block" }, height: "100%" }}>
        <Divider orientation="vertical" sx={{ height: "100%", borderColor: "#4caf50" }} />
      </Grid>

      {/* Right Side - Sign Up Section */}
      <Grid item xs={12} md={5} display="flex" alignItems="center" justifyContent="center">
        <Box
          sx={{
            width: "80%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 3,
            paddingLeft: { xs: 0, md: 3 },
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            As New Admin
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            By creating an account, dive into FloraCare and manage your plants, tools, and gardening needs.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: "none", fontSize: "1rem" }}
            onClick={() => navigate("/signup")}
          >
            Create Account
          </Button>
          {/* <Typography variant="body2" textAlign="center">
                      Don't have an account?{" "}
                      <Link href="/signup" underline="hover">
                        Sign Up
                      </Link>
                    </Typography> */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
