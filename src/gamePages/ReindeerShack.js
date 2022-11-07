import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import "./shack.css";
const Shack = () => {
  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="reindeer-shack">Shack</div>
    </div>
  );
};
export default Shack;
