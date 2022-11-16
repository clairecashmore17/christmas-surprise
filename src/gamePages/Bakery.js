import React from "react";
import { Link } from "react-router-dom";
import { Fab, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useGlobalState } from "../utils/GlobalState";
import Dialogue from "../components/DialogueBox";
import "./bakery.css";
const Bakery = () => {
  const [state, dispatch] = useGlobalState();
  let dialogue = [];
  switch (state.bakery) {
    case 0:
      dialogue = ["Welcome to the bakery!", "Smells great in here..."];
      break;
    case 1:
      dialogue = [
        "Daisy: 'Hello how can I serve you today?'",
        "Daisy: 'You want to know who ordered something yesterday?'",
        "Daisy: 'Oh.. I would need to check the logs from Christmas eve …'",
        "Daisy: 'But that’s really against the rules. I don’t know… '",
        "Daisy: 'What could you offer in return?'",
      ];
      break;
    case 2:
      dialogue = ["Daisy: 'Any ideas?'"];
      break;
    case 3:
      dialogue = [
        "Daisy: 'Oh my goodness! I’m such a sucker for Christmas songs!'",
        "Daisy: 'You guys have such amazing voices! Let’s see… '",
        "yesterday we only had one order since everyone else was pretty busy getting the slay ready.",
        "Daisy: 'Oh! I remember this order! It was odd, '",
        "Daisy: 'someone ordered poppy seed muffins with 10x the poppy-seed! '",
        "Daisy: 'We usually avoid poppyseed with the reindeers around because it can be rather poisonous and cause them to get sick'",
        "Daisy: 'The customer just kept saying 'I'm going to buy this.' While raising his right eyebrow.'",
        "Daisy: 'Anyways.. happy holidays I’ve got to get back to work!'",
        "Poppy-seed muffins?! That can't be good. I hope everyone’s okay!... Maybe you should checkout the next spot on the list?",
      ];
      break;
    case "cookie":
      dialogue = [
        "That's so sweet but.. I'm gluten free...",
        "I guess you should check the poster again...",
      ];
      break;
    case "money":
      dialogue = [
        "Oh, I don't take bribes...",
        "I guess you should check the poster again...",
      ];
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
      <div className="bakery-building">
        <Link to="/bakery">
          <button
            className="daisy"
            onClick={() => {
              console.log("clicked daisy");
              dispatch({ bakery: 1, dialogue_index: 0 });
              console.log(`bakery is ${state.bakery}`);
            }}
          ></button>
          <Link to={"/posters"}>
            <button
              className="posters"
              onClick={() => {
                dispatch({ dialogue_index: 0 });
              }}
            ></button>
          </Link>
        </Link>
        {state.bakery == 2 ? (
          <div className="centered">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Link to={"/bakery"}>
                <Button
                  onClick={() => {
                    console.log("cookies");
                    dispatch({ bakery: "cookie", dialogue_index: 0 });
                  }}
                >
                  Give her some biscochitos
                </Button>
                <Link to={"/karaoke"}>
                  <Button
                    onClick={() => {
                      console.log("play music");
                      dispatch({ bakery: "karoake" });
                    }}
                  >
                    <a href=""></a>Play a Retro Christmas Song
                  </Button>
                </Link>
              </Link>
              <Button
                onClick={() => {
                  console.log("money");
                  dispatch({ bakery: "money", dialogue_index: 0 });
                }}
              >
                Pay her off...
              </Button>
            </ButtonGroup>
          </div>
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
export default Bakery;
