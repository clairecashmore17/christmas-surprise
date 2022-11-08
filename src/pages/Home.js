import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DialogueBox from "../components/DialogueBox";
const Home = () => {
  const intro_dialogue = [
    "Christmas eve was a success! Or was it?....",
    "Oh no! Santa never returned from his final trip! We are going to have to find him if Christmas ever wants to continue on?",
    "We will need the help from a smart family in order to figure this one out…",
    "someone get me the Cashmore family!",
  ];
  return (
    <div className="homepage">
      <DialogueBox dialog_texts={intro_dialogue} />
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
