import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'
import {
  Box,
  Grid,
  Card,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { login } from '../../redux/reducers/userReducer'
import createData from "../../helpers/createData";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector(state => state.user.auth);

  useEffect(() => {
    if (auth) {
      navigate('/',{ replace:true });
    }
  },[auth])

  // Initialize state for email and password
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = formData;
  
      // Validate that email and password are filled
      if (email.trim().length === 0 || password.trim().length === 0) {
        alert("Please fill all the details");
        return;
      }
  
      // Prepare the payload to send to the backend
      const baseUrl = "http://localhost:5000/api";
      const payload = {
        email: email.trim().toLowerCase(),
        password: password.trim(),
      };
  
      setIsLoading(true);
  
      // Send the data to the backend API
      const res = await createData(baseUrl + "/users/login", "POST", payload, 200);
  
      // Check the response and handle success
      if (res) {
        alert("Login successful");
        // You can store the token or user info here if necessary
        dispatch(login({ token:res.appUserToken}));
        navigate("/home"); // Redirect to the home page after successful login
      } else {
        throw new Error("Login failed");
      }
    } catch (err) {
      alert("An error occurred during login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid container sx={{ height: "100vh", justifyContent: "center" }}>
      {/* Left Side - Login Section */}
      <Grid
        item
        xs={12}
        md={6}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
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
          <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ textAlign:"center" }}>
            Login
          </Typography>
          <Typography variant="body1" sx={{ }}>
            If you have an account, log in with your email.
          </Typography>
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
            label="Password"
            type="password"
            fullWidth
            required
            name="password"
            value={formData.password}
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
            {isLoading ? "Logging in..." : "Login"}
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
