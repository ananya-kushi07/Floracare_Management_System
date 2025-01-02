import React, { useState } from "react";
import { Box, Grid, Card, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || ""); // Set email if passed via state

  const handleSignUp = (e) => {
    e.preventDefault();
    // Perform signup logic here
    // After successful signup, redirect to home
    navigate("/");
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side - Card Section */}
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #4caf50, #81c784)",
            color: "#fff",
            textAlign: "center",
            p: 4,
          }}
        >
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Join FloraCare
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Become part of our gardening community and manage your garden with ease.
          </Typography>
        </Card>
      </Grid>

      {/* Right Side - Signup Form */}
      <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
        <Box
          component="form"
          onSubmit={handleSignUp}
          sx={{
            width: "80%",
            maxWidth: 400,
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Sign Up
          </Typography>
          <TextField label="Name" type="text" fullWidth required />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email} // Pre-fill with passed email
            onChange={(e) => setEmail(e.target.value)} // Allow updates to email field
          />
          <TextField label="Phone" type="tel" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none", fontSize: "1rem" }}
          >
            Create Account
          </Button>
          <Typography variant="body2" textAlign="center">
            Already have an account?{" "}
            <Link href="/" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
