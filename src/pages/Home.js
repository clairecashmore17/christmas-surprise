import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
const Home = () => {
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
