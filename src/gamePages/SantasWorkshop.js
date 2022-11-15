import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import "./santas-ws.css";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
const SantasWorkshop = () => {
  const [state, dispatch] = useGlobalState();

  console.log(state.santas);
  let dialogue = [];

  switch (state.santas) {
    case 0:
      dialogue = [
        "Mrs. Claus: 'Oh hello dear… why are you here? To help find Santa?...'",
        "Mrs. Claus: 'That'd be great, but how am I supposed to trust you?'",
        "Mrs. Claus: 'Oh, Santa always used to say that a good way to trust someone is if they knew how to do his favorite dances…'",
        "Mrs. Claus: 'I guess you'll have to give it a try? '",
        "We are going to need Heisenbourck and GreenMachineMomma to do this!",
        "Mrs. Claus: 'Wow!... what.. hip dance moves! Well I suppose I can let you in.'",
        "Hint: maybe you should check the radio?",
      ];
      break;
    case 1:
      dialogue = [
        "**static**...Ho ho ho! Looks like we wrapped it up for tonight boys! **static**",
        "Let's head on home. Let's see…**static**",
        "Rudolph! Head back home!..",
        " … ",
        "Rudolph?..... Buddy!",
        "Head back home I say! Something isn't right… ",
        "I'll have to try and navigate using this map here. **static**",
        "Sounds like something happened with Rudolph. I wonder what else we can find in here…",
      ];
      break;
    case 3:
      dialogue = ["Maybe check the list to see where to go next?"];
      break;
    default:
      dialogue = [""];
      break;
  }

  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="workshop">
        <Link to="/santas-workshop">
          <button
            className="radio"
            onClick={() => {
              dispatch({ santas: 1 });
            }}
          ></button>
        </Link>
        <Link to="/note">
          <button
            className="note"
            onClick={() => {
              dispatch({ santas: 2 });
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
export default SantasWorkshop;
