import React, { useState } from "react";
import "./index.css";
const Dialogue = (props) => {
  const { dialog_texts = [] } = props;
  const [dialog_index, setDialog] = useState(0);
  console.log(dialog_index);

  const nextButtonHandler = async (event) => {
    event.preventDefault();
    // console.log("clicked next button!");

    let count = dialog_index;
    // console.log(count);
    // console.log(dialog_index);
    if (count + 1 <= dialog_texts.length) {
      setDialog(++count);
    }
    // console.log(count);
    // console.log(dialog_index);
  };
  return (
    <>
      <div className="dialog-box">
        {dialog_index == dialog_texts.length ? (
          <></>
        ) : (
          <>
            <p className="diaolog-text">{dialog_texts[dialog_index]}</p>

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
