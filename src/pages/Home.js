import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DialogueBox from "../components/DialogueBox";
const Home = () => {
  const [map, selectMap] = useState("home");
  return (
    <div className="homepage">
      <Link to={"/town"}>
        <button
          className="start-game btn-jiggle"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Start Game
        </button>
      </Link>
    </div>
  );
};

export default Home;
