import React from "react";
import "./Android.css";
import Topics from "./MainTopics/Topics/AndTopics";
// import Navbar from "../../Navbar/Navbar";
import "../../Subjects/Subjects.css";
function Android() {
  return (
    <>
      <div className="aplr">
        <div className="container">
          <div className="card4 mt-2 mb-1">
            <h1>Adv. Android</h1>
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

export default Android;
