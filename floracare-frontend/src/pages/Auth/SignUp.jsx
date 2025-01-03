import React, { useState } from "react";
import { Box, Grid, Card, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import createData from "../../helpers/createData";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize state for the form fields
  const [formData, setFormData] = useState({
    name: "",
    email: location.state?.email || "", // Set email if passed via state
    phone: "",
    password: "",
    experienceLevel: "",
    specialization: "",
    isAdmin: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password, phone, experienceLevel, specialization, isAdmin } = formData;

      // Validate that all fields are filled
      if (
        name.trim().length !== 0 &&
        email.trim().length !== 0 &&
        password.trim().length !== 0 &&
        phone.trim().length !== 0 &&
        experienceLevel.trim().length !== 0 &&
        specialization.trim().length !== 0
      ) {
        // Validate phone number
        if (!(phone >= 1000000000 && phone <= 9999999999)) {
          alert("Phone number should be 10 digits");
          return 0;
        }

        // Prepare the payload to send to the backend
        const baseUrl = "http://localhost:5000/api";
        const payload = {
          name: name.trim().toLowerCase(),
          email: email.trim().toLowerCase(),
          password: password.trim(),
          phone: phone.trim(),
          experienceLevel: experienceLevel.trim().toLowerCase(),
          specialization: specialization.trim().toLowerCase(),
          isAdmin: isAdmin, // Assuming it's a boolean value
        };

        setIsLoading(true);

        // Send the data to the backend API
        const res = await createData(baseUrl + "/users/signup", "POST", payload, 201);

        // Check the response and handle success
        if (res) {
          alert("New user added successfully");
          navigate('/login');
        } else {
          throw new Error("Create error");
        }
      } else {
        alert("Please fill all the details");
      }
    } catch (err) {
      alert("An error occurred");
    } finally {
      setIsLoading(false);
    }
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
          <TextField
            label="Name"
            type="text"
            fullWidth
            required
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Phone"
            type="tel"
            fullWidth
            required
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Experience Level"
            type="text"
            fullWidth
            required
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleInputChange}
          />
          <TextField
            label="Specialization"
            type="text"
            fullWidth
            required
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            sx={{ textTransform: "none", fontSize: "1rem" }}
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Account"}
          </Button>
          <Typography variant="body2" textAlign="center">
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
