import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile icon
import { Link } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#B6FFA1",
        width: "100%",
        opacity: "70%",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            color: "#4A0670",
          }}
        >
          Grow Beautifully
        </Typography>
        <Button
          component={Link}
          to="/"
          sx={{
            color: "#4A0670",
            textTransform: "none",
            position: "relative",
            "&:hover:after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#4A6670",
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Home
        </Button>
        <Button
          component={Link}
          to="/plant"
          sx={{
            color: "#4A0670",
            textTransform: "none",
            position: "relative",
            "&:hover:after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#4A6670",
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Plants
        </Button>
        <Button
          component={Link}
          to="/gardener"
          sx={{
            color: "#4A0670",
            textTransform: "none",
            position: "relative",
            "&:hover:after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#4A6670",
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Gardener
        </Button>
        <Button
          component={Link}
          to="/fertilizer"
          sx={{
            color: "#4A0670",
            textTransform: "none",
            position: "relative",
            "&:hover:after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "#4A6670",
              transform: "scaleX(0)",
              transformOrigin: "bottom right",
              transition: "transform 0.3s ease",
            },
          }}
        >
          Fertilizer
        </Button>
        <Button
  component={Link}
  to="/tools"
  sx={{
    color: "#4A0670",
    textTransform: "none",
    position: "relative",
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "#4A6670",
      transform: "scaleX(0)",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease",
    },
  }}
>
  Tools
</Button>

<Button
  component={Link}
  to="/container"
  sx={{
    color: "#4A0670",
    textTransform: "none",
    position: "relative",
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "2px",
      backgroundColor: "#4A6670",
      transform: "scaleX(0)",
      transformOrigin: "bottom right",
      transition: "transform 0.3s ease",
    },
  }}
>
  Container
</Button>

        <IconButton
          sx={{ color: "#4A0670" }}
          onClick={handleMenuOpen} // Open menu on click
        >
          <AccountCircleIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)} // Menu opens if anchorEl is not null
          onClose={handleMenuClose} // Close menu when clicked outside
        >
          <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
            Profile
          </MenuItem>
          <MenuItem component={Link} to="/orders" onClick={handleMenuClose}>
            Orders
          </MenuItem>
          <MenuItem component={Link} to="/settings" onClick={handleMenuClose}>
            Settings
          </MenuItem>
          <MenuItem component={Link} to="/" onClick={handleMenuClose}>
          Logout
          </MenuItem>
          <MenuItem component={Link} to="/add" onClick={handleMenuClose}>
          Gardener
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
