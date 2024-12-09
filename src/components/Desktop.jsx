import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

const Desktop = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "white",
      }}
    >
      <Box sx={{ width: 1440, height: 1024, bgcolor: "#d9d9d9" }}>
        <AppBar
          position="static"
          sx={{ bgcolor: "rgba(73, 69, 79, 1)", height: 100 }}
        >
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton edge="end" color="inherit" sx={{ mr: 2 }}>
              <ExploreIcon sx={{ fontSize: 50 }} />
              <Typography variant="h6" sx={{ ml: 1, color: "#dadada" }}>
                Explore
              </Typography>
            </IconButton>
            <IconButton edge="end" color="inherit">
              <PersonIcon sx={{ fontSize: 50 }} />
              <Typography variant="h6" sx={{ ml: 1, color: "#dadada" }}>
                Profile
              </Typography>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100% - 100px)",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Inter, Helvetica",
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: "-3.84px",
              lineHeight: "120%",
              color: "black",
            }}
          >
            GPTUR
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Desktop;
