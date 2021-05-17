import React from "react";
import "./Spm.css";
import Topics from "./MainTopics/Topics/SpmTopics";
// import Navbar from "../../Navbar/Navbar";
import "../../Subjects/Subjects.css";
function Spm() {
  return (
    <>
      <div id="head" className="aplr">
        <div className="container">
          <div className="card1 mt-2 mb-1">
            <h1>SPM</h1>
            <h2></h2>
          </div>
        </div>
        <Topics />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Spm;
