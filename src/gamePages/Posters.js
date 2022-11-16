import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
import "./bakery.css";
const Posters = () => {
  const [state, dispatch] = useGlobalState();
  let dialogue = [];
  switch (state.bakery) {
    case 2:
      dialogue = ["Hmm.. interesting poster choices..."];

      break;

    default:
      dialogue = [];
      break;
  }
  return (
    <div className="centered">
      <Link to="/bakery">
        <Fab
          variant="extended"
          onClick={() => {
            dispatch({ bakery: 2, dialogue_index: 0 });
          }}
        >
          ← Back to Bakery
        </Fab>
      </Link>
      <div className="posters-page"></div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Posters;
