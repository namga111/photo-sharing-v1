
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { useLocation } from "react-router-dom";

import "./styles.css";
import models from "../../modelData/models";

function TopBar() {
  const location = useLocation();
  const pathname = location.pathname;

  let title = "";

  if (pathname === "/users") {
    title = "User List";
  } else if (pathname.startsWith("/users/")) {
    const userId = pathname.split("/")[2];
    const user = models.userModel(userId);

    title = user
      ? user.first_name + " " + user.last_name
      : "User Detail";
  } else if (pathname.startsWith("/photos/")) {
    const userId = pathname.split("/")[2];
    const user = models.userModel(userId);

    title = user
      ? "Photos of " + user.first_name + " " + user.last_name
      : "User Photos";
  }

  return (
    <AppBar className="topbar-appBar" position="absolute">
      <Toolbar>
        <Typography variant="h5" color="inherit">
          Lê Tuấn Nam
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Typography variant="h6" color="inherit">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;