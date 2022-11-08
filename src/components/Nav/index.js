import React, { useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Fab from "@mui/material/Fab";
import "./index.css";
const AppNavbar = () => {
  return (
    <>
      <div className="navbar" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Fab className="nav-item" variant="extended">
            <Link color="inherit" to={"/"}>
              Home
            </Link>
          </Fab>
          <Fab className="nav-item" variant="extended">
            <Link color="inherit" to={"/highscores"}>
              Highscore
            </Link>
          </Fab>
          <Fab className="nav-item" variant="extended">
            <Link color="inherit" to={"/characters"}>
              Character list
            </Link>
          </Fab>
        </Breadcrumbs>
      </div>
    </>
  );
};

export default AppNavbar;
