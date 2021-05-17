import React from "react";
import "./Java.css";
import Topics from "./MainTopics/Topics/JavaTopics";
// import Navbar from "../../Navbar/Navbar";
import "../../Subjects/Subjects.css";
function Java() {
  return (
    <>
      <div id="head" className="aplr">
        <div className="container">
          <div className="card6 mt-2 mb-1">
            <h1>CORE JAVA</h1>
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

export default Java;
