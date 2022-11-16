import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
import "./town.css";
const Town = () => {
  const [state, dispatch] = useGlobalState();
  console.log(state.town);
  let dialogue = [];
  switch (state.town) {
    case 0:
      dialogue = [
        "Christmas eve was a success! Or was it?....",
        "Oh no! Santa never returned from his final trip! We are going to have to find him if Christmas ever wants to continue on?",
        "We will need the help from a smart family in order to figure this one out…",
        "someone get me the Cashmore family!",
        "...",

        "Last we heard of Santa was his broadcast right before the signal was lost.",
        "Maybe we could head there to find out?... ",
        "Keep in contact with me on your radio.",
        "Hint: The red is santas workshop...",
      ];
      break;
    case 1:
      dialogue = ["Chapter 2"];
      break;
    default:
      dialogue = [""];
      break;
  }

  return (
    <div className="centered">
      <div className="town">
        <Link to={"/santas-workshop"}>
          <button
            className="santas-ws"
            onClick={() => {
              console.log("clicked santa");
              dispatch({ town: 1, dialogue_index: 0 });
              console.log(`town is ${state.town}`);
            }}
          ></button>
        </Link>
        <Link to={"/reindeer-shack"}>
          <button className="shack"></button>
        </Link>
        <Link to={"/bakery"}>
          <button
            className="bakery"
            onClick={() => {
              console.log("clicked bakery");
              dispatch({ dialogue_index: 0 });
            }}
          ></button>
        </Link>
      </div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Town;
