import React from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import { useGlobalState } from "../utils/GlobalState";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Dialogue from "../components/DialogueBox";
import "./shack.css";
const Shack = () => {
  const [state, dispatch] = useGlobalState();
  let dialogue = [];
  switch (state.reindeer) {
    case 0:
      dialogue = [
        "Nicholas Cage: 'What are you doing here?!'",
        "Nicholas Cage: 'Me? I'm just.. well it doesnt matter, I'll be on my way!'",
      ];
      break;
    case "paint":
      dialogue = [
        "Nicholas Cage: 'The red paint? Oh I was painting santas hut earlier.'",
      ];
      break;
    case "poppy":
      dialogue = ["Nicholas Cage: 'The poppyseed muffins were for my lunch?'"];
      break;
    default:
      dialogue = [];
      break;
  }
  return (
    <div className="centered">
      <Link to="/town">
        <Fab variant="extended">← Back to Town</Fab>
      </Link>
      <div className="reindeer-shack">
        <div className="centered">
          {" "}
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Link to={"/reindeer-shack"}>
              <Button
                onClick={() => {
                  dispatch({ reindeer: "paint", dialogue_index: 0 });
                }}
              >
                Question about paint.
              </Button>
              <Button
                onClick={() => {
                  dispatch({ reindeer: "poppy", dialogue_index: 0 });
                }}
              >
                Question about poppyseed
              </Button>
            </Link>

            <Link to={"/final-boss"}>
              <Button
                onClick={() => {
                  dispatch({ reindeer: "1", dialogue_index: 0 });
                }}
              >
                Turn him in!
              </Button>
            </Link>
          </ButtonGroup>
        </div>
      </div>
      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default Shack;
