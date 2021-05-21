import React from "react";
import "./Subjects.css";
import { Link } from "react-router-dom";
function Subjects(props) {
  return (
    <>
      <div className="container subject-div">
        <Link
          to="/Classroom/spm"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div className="card1 my-3" onClick={() => props.setNavTitle("SPM")}>
            <h1>SPM</h1>
            <h2></h2>
          </div>
        </Link>
        <Link
          to="/Classroom/aplr"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div className="card2 my-3" onClick={() => props.setNavTitle("APLR")}>
            <h1>APLR</h1>
          </div>
        </Link>
        <Link
          to="/Classroom/ittool"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div
            className="card3 my-3"
            onClick={() => props.setNavTitle("IT TOOL & WEB II")}
          >
            <h1>IT TOOL {`&`} WEB III</h1>
          </div>
        </Link>
        <Link
          to="/Classroom/aand"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div
            className="card4 my-3"
            onClick={() => props.setNavTitle("Adv. Android")}
          >
            <h1>Adv. Android</h1>
          </div>
        </Link>
        <Link
          to="/Classroom/adbms"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div
            className="card5 my-3"
            onClick={() => props.setNavTitle("Adv. DBMS")}
          >
            <h1>ADBMS</h1>
          </div>
        </Link>
        <Link
          to="/Classroom/corejava"
          style={{ cursor: "pointer", textDecoration: "none" }}
        >
          <div
            className="card6 my-3"
            onClick={() => props.setNavTitle("CORE JAVA")}
          >
            <h1>CORE JAVA</h1>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Subjects;
