import React from "react";
import "./Aplr.css";
import ApTopics from "./MainTopics/Topics/ApTopics";
import "../../Subjects/Subjects.css";
function Aplr() {
  return (
    <>
      <div className="aplr">
        <div className="container">
          <div className="card2 mt-2 mb-1">
            <h1>APLR</h1>
          </div>
        </div>
        <ApTopics />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Aplr;
