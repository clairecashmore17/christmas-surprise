import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
import "./santas-ws.css";
const Dance = () => {
  const [state, dispatch] = useGlobalState();
  const [currentDance, setDance] = useState(0);
  let gif = [
    "swanky",
    "wave",
    "running_man",
    "shoot",
    "mean-girls",
    "good-job",
  ];
  let dialogue = [];
  switch (state.santas) {
    case "dance":
      dialogue = ["These are the newest dance moves you have to learn!"];

      break;

    default:
      dialogue = [];
      break;
  }

  return (
    <div className="centered">
      <Link to="/santas-workshop">
        <Fab
          variant="extended"
          onClick={() => {
            dispatch({ santas: 1, dialogue_index: 0 });
          }}
        >
          ← Back to Workshop
        </Fab>
      </Link>
      <div className="dance-page">
        {" "}
        <img
          src={require(`../../images/${gif[currentDance]}.gif`)}
          className="dance-img"
          alt="dance gif"
        />
        {currentDance + 1 != gif.length ? (
          <>
            <button
              className="next-btn"
              onClick={() => {
                console.log(currentDance);
                setDance(currentDance + 1);
                console.log(currentDance);
              }}
            >
              Next Dance
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Dance;
