import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import "./bakery.css";
const Bakery = () => {
  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="bakery-building">Bakery</div>
    </div>
  );
};
export default Bakery;
