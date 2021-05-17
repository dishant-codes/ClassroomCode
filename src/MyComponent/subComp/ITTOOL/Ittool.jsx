import React from "react";
import "./Ittool.css";
import Topics from "./MainTopics/Topics/ItTopics";
// import Navbar from "../../Navbar/Navbar";
import "../../Subjects/Subjects.css";
function Ittool() {
  return (
    <>
      <div id="aplr" className="IT TOOL & WEB III">
        <div className="container">
          <div className="card3 mt-2 mb-1">
            <h1>IT TOOL {`&`} Web III</h1>
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

export default Ittool;
