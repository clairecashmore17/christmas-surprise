import React from "react";
import { Link } from "react-router-dom";
import "./town.css";
const Town = () => {
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
          {" "}
          <button className="bakery"></button>
        </Link>
      </div>
    </div>
  );
};
export default Town;
