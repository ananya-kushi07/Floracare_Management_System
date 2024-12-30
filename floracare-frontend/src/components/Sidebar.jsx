import React from "react";
import { Box, List, ListItem, ListItemText, ListItemIcon, Tooltip } from "@mui/material";
import { LocalFlorist, People, Inventory, Build, Inbox } from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 250,
        backgroundColor: "#A0AF84", // Primary background color
        height: "100vh",
        color: "#00F0FF", // Text color
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "2px 0px 5px rgba(0,0,0,0.1)", // Subtle shadow
      }}
    >
      <List>
        {/* Plants */}
        <Tooltip title="Explore various plants" placement="right" arrow>
          <ListItem
            button
            component="a"
            href="/plants"
            sx={{
              "&:hover": {
                backgroundColor: "#668F80", // Hover color
                color: "#FFFFFF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FFFFFF" }}>
              <LocalFlorist />
            </ListItemIcon>
            <ListItemText primary="Plants" />
          </ListItem>
        </Tooltip>

        {/* Gardeners */}
        <Tooltip title="Find skilled gardeners" placement="right" arrow>
          <ListItem
            button
            component="a"
            href="/gardeners"
            sx={{
              "&:hover": {
                backgroundColor: "#668F80",
                color: "#FFFFFF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FFFFFF" }}>
              <People />
            </ListItemIcon>
            <ListItemText primary="Gardeners" />
          </ListItem>
        </Tooltip>

        {/* Fertilizers */}
        <Tooltip title="Check out fertilizers" placement="right" arrow>
          <ListItem
            button
            component="a"
            href="/fertilizers"
            sx={{
              "&:hover": {
                backgroundColor: "#668F80",
                color: "#FFFFFF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FFFFFF" }}>
              <Inventory />
            </ListItemIcon>
            <ListItemText primary="Fertilizers" />
          </ListItem>
        </Tooltip>

        {/* Tools */}
        <Tooltip title="Explore gardening tools" placement="right" arrow>
          <ListItem
            button
            component="a"
            href="/tools"
            sx={{
              "&:hover": {
                backgroundColor: "#668F80",
                color: "#FFFFFF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FFFFFF" }}>
              <Build />
            </ListItemIcon>
            <ListItemText primary="Tools" />
          </ListItem>
        </Tooltip>

        {/* Containers */}
        <Tooltip title="Find planting containers" placement="right" arrow>
          <ListItem
            button
            component="a"
            href="/containers"
            sx={{
              "&:hover": {
                backgroundColor: "#668F80",
                color: "#FFFFFF",
              },
            }}
          >
            <ListItemIcon sx={{ color: "#FFFFFF" }}>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Containers" />
          </ListItem>
        </Tooltip>
      </List>
    </Box>
  );
};

export default Sidebar;
