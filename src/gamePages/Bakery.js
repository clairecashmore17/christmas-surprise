import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Dialogue from "../components/DialogueBox";
import "./bakery.css";
const Bakery = () => {
  const dialogue = [
    "Daisy: 'Hello how can I serve you today?'",
    "Daisy: 'Oh.. I would need to check the logs from Christmas eve …'",
    "Daisy: 'But that’s really against the rules. I don’t know… '",
    "Daisy: 'What woudl you offer in return?'",
  ];
  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="bakery-building"></div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Bakery;
