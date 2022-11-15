import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./index.css";
const Dialogue = (props) => {
  const dialog_texts = props.text;
  const [dialog_index, setDialog] = useState(0);

  // console.log(dialog_index);
  // const dialog_texts = [
  //   "Christmas eve was a success! Or was it?....",
  //   "Oh no! Santa never returned from his final trip! We are going to have to find him if Christmas ever wants to continue on?",
  //   "We will need the help from a smart family in order to figure this one out…",
  //   "someone get me the Cashmore family!",
  //   "...",

  //   "Last we heard of Santa was his broadcast right before the signal was lost.",
  //   "Maybe we could head there to find out?... ",
  //   "Keep in contact with me on your radio.",
  //   "Hint: The red is santas workshop...",
  //   "Mrs. Claus: 'Oh hello dear… why are you here? To help find Santa?...'",
  //   "Mrs. Claus: 'That’d be great, but how am I supposed to trust you?'",
  //   "Mrs. Claus: 'Oh, Santa always used to say that a good way to trust someone is if they knew how to do his favorite dances…'",
  //   "Mrs. Claus: 'I guess you’ll have to give it a try? '",
  //   "We are going to need Heisenbourck and GreenMachineMomma to do this!",
  //   "Mrs. Claus: 'Wow!... what.. hip dance moves! Well I suppose I can let you in.'",
  //   "Hint: maybe you should check the radio?",
  //   "Sounds like something happened with Rudolph!",
  //   "I wonder what else we can find in here…",
  //   "Hint: Does anyone smell paint?",
  //   "Weird…you say it was a checklist? And they went everywhere on the map? Sounds suspicious… keep me updated!",
  //   "Hint: 'The yellow house is the bakery!'",
  //   "Daisy: 'Hello how can I serve you today?'",
  //   "Daisy: 'Oh.. I would need to check the logs from Christmas eve …'",
  //   "Daisy: 'But that’s really against the rules. I don’t know… '",
  //   "Daisy: 'What woudl you offer in return?'",
  // ];
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
