import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGlobalState } from "../../utils/GlobalState";
import "./index.css";
const Dialogue = (props) => {
  const [state, dispatch] = useGlobalState();
  const dialog_texts = props.text;
  console.log(state.dialogue_index);

  const nextButtonHandler = async (event) => {
    event.preventDefault();
    // console.log("clicked next button!");

    let count = state.dialogue_index;
    console.log("count is " + count);
    console.log("dialog index is " + state.dialogue_index);
    if (count + 1 <= dialog_texts.length) {
      dispatch({ dialogue_index: ++count });
    }
    // console.log(count);
    // console.log(dialog_index);
  };
  return (
    <>
      <div className="dialog-box">
        {state.dialogue_index == dialog_texts.length ? (
          <></>
        ) : (
          <>
            <p className="diaolog-text">{dialog_texts[state.dialogue_index]}</p>

            <button
              className="dialogue-next btn-jiggle"
              onClick={nextButtonHandler}
            >
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Dialogue;
