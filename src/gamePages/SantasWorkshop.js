import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import "./santas-ws.css";

const SantasWorkshop = () => {
  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="workshop"></div>
    </div>
  );
};
export default SantasWorkshop;
