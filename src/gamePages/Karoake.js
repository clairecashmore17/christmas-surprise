import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import Dialogue from "../components/DialogueBox";
import { useGlobalState } from "../utils/GlobalState";
import "./bakery.css";
const Karaoke = () => {
  const [state, dispatch] = useGlobalState();
  let dialogue = [];
  switch (state.bakery) {
    case "karoake":
      dialogue = ["I think I can help with this..."];

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
            dispatch({ bakery: 3, dialogue_index: 0 });
          }}
        >
          ← Back to Bakery
        </Fab>
      </Link>
      <div className="karoake-page">
        <iframe
        title="last-christmas-dance-karaoke"
          width="720"
          height="615"
          src="https://www.youtube.com/embed/Ktm-Y_l-ftY"
        ></iframe>
        <div className="george"></div>
      </div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Karaoke;
