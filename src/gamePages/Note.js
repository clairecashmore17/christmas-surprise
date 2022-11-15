import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
import "./santas-ws.css";
const Note = () => {
  const [state, dispatch] = useGlobalState();
  let dialogue = [];
  switch (state.santas) {
    case 2:
      dialogue = [
        "Weird…who could have made this? And they went everywhere on the map!",
        "Sounds suspicious… lets follow their steps!",
      ];

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
            dispatch({ santas: 3 });
          }}
        >
          ← Back to WorkShop
        </Fab>
      </Link>
      <div className="note-page"></div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Note;
