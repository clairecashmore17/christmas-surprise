import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fab } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialogue from "../components/DialogueBox";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useGlobalState } from "../utils/GlobalState";
import "./shack.css";
const FinalBoss = () => {
  const [state, dispatch] = useGlobalState();
  const [toggle, setToggle] = useState(false);
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  let dialogue = [];
  switch (state.reindeer) {
    case "1":
      dialogue = [
        "Santa: 'Ho... ho.. HO! Hello!'",
        "Santa: 'I've been stuck here since Christmas Eve. The only way to get out it to get the right combination.",
        "Santa: 'He always presses the dial 4 times, so there must be four numbers.",
        "Santa: 'Maybe you guys should check your cards to solve this one? Maybe '",
      ];

      break;

    default:
      dialogue = [];
      break;
  }
  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleCodeButton = (event) => {
    event.preventDefault();
    console.log(code);
    if (code === "210212348150") {
      console.log("Correct!");
      setFinished(true);
      setToggle(false);
    } else {
      console.log("Incorrect");
      setOpen(true);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    console.log(`name is ${name} value is ${value}`);
    setCode(value);
    console.log(code);
  };
  return (
    <div className="centered">
      <Link to="/town">
        <Fab
          variant="extended"
          onClick={() => {
            dispatch({ town: 1, dialogue_index: 0 });
          }}
        >
          ← Back to Town
        </Fab>
      </Link>
      <div className="final-page">
        {finished ? (
          <>
            {" "}
            <Link to={"/town"}>
              <button
                className="finish"
                onClick={() => {
                  dispatch({ town: 1, dialogue_index: 0 });
                }}
              >
                Free Santa!
              </button>
            </Link>
          </>
        ) : (
          <>
            {" "}
            <button
              className="key-code"
              onClick={() => {
                setToggle(!toggle);
              }}
            ></button>
          </>
        )}
      </div>
      {toggle ? (
        <>
          {" "}
          <div className="input-code">
            <TextField
              id="outlined-basic"
              label="Enter Code Here"
              variant="outlined"
              onChange={handleInputChange}
              value={code}
            />
            <IconButton
              aria-label="fingerprint"
              color="success"
              onClick={handleCodeButton}
            >
              <Fingerprint />
            </IconButton>
          </div>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert severity="error">Wrong Code!</Alert>
          </Snackbar>
        </>
      ) : (
        <></>
      )}

      <div className="town-chapters">
        <Dialogue text={dialogue} />
      </div>
    </div>
  );
};
export default FinalBoss;
