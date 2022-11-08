import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DialogueBox from "../components/DialogueBox";
import "./town.css";
const Town = () => {
  const town_dialogue = {
    town_chapter_1: [
      "Last we heard of Santa was his broadcast right before the signal was lost.",
      "Maybe we could head there to find out?... ",
      "Keep in contact with me on your radio.",
    ],
    town_chapter_2: ["second chapter"],
  };

  const [chapter, setChapter] = useState(1);
  useEffect(() => {
    var dialogueElement = document.querySelector(".town-chapters");
    const handleChapter = () => {
      console.log("clicked the dialogue tag");
    };
    dialogueElement.addEventListener("click", handleChapter);
  });

  return (
    <div className="centered">
      <div className="town">
        <Link to={"/santas-workshop"}>
          <button className="santas-ws"></button>
        </Link>
        <Link to={"/reindeer-shack"}>
          <button className="shack"></button>
        </Link>
        <Link to={"/bakery"}>
          <button className="bakery"></button>
        </Link>
      </div>
      <div className="town-chapters">
        {chapter == 1 ? (
          <DialogueBox dialog_texts={town_dialogue.town_chapter_1} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Town;
