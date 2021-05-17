import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Icon from "./logo.svg";

function Navbar(props) {
  // function handleClick() {
  //   window.location.reload();
  // }
  return (
    <>
      <div id="nav_top" className="nav1">
        <div className="brand d-flex align-items-center">
          <div
            className="togb"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            {/* <div
            className="line"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></div>
          <div
            className="line"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></div>
          <div
            className="line"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          ></div> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <path
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          <h3>Classroom</h3>
        </div>
        <Link
          to="/Classroom/"
          style={{ textDecoration: "none" }}
          onClick={() => props.setNavTitle("Classroom")}
        >
          <img
            className="rounded-circle"
            style={{ marginRight: "20px" }}
            src={Icon}
            width="32"
            height="32"
          />
        </Link>
      </div>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            {props.head}
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <hr style={{ marginTop: "-0.5em" }} />
        <div className="offcanvas-body">
          <div className="navbox fs-5">
            <ul style={{ listStyle: "none", padding: "0px" }}>
              <li onClick={() => props.setNavTitle("Classroom")}>
                <Link
                  to="/Classroom/"
                  style={{ textDecoration: "none" }}
                  data-bs-dismiss="offcanvas"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="blueviolet"
                    className="bi bi-card-list"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "0.8em" }}
                  >
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                  </svg>
                  Notes
                </Link>
              </li>
              <li
                className="margin"
                onClick={() => props.setNavTitle("Tutorial")}
              >
                <Link
                  to="/Classroom/tutorial"
                  style={{ textDecoration: "none" }}
                  data-bs-dismiss="offcanvas"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="red"
                    className="bi bi-card-list"
                    viewBox="0 0 16 16"
                    style={{ marginRight: "0.8em" }}
                  >
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                  </svg>
                  Tutorial
                </Link>
              </li>
              <li className="margin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="green"
                  className="bi bi-card-list"
                  viewBox="0 0 16 16"
                  style={{ marginRight: "0.8em" }}
                >
                  <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
                </svg>
                Practical
              </li>
            </ul>
            <hr style={{ color: "black", marginBottom: "0" }} />
          </div>
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Subjects
            </h5>
          </div>
          <div className="navbox2">
            <Link
              to="/Classroom/spm"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub1"
                onClick={() => props.setNavTitle("SPM")}
              >
                <h3>SPM</h3>
              </div>
            </Link>
            <Link
              to="/Classroom/aplr"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub2"
                onClick={() => props.setNavTitle("APLR")}
              >
                <h3>APLR</h3>
              </div>
            </Link>
            <Link
              to="/Classroom/ittool"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub3"
                onClick={() => props.setNavTitle("IT TOOLS & WEB III")}
              >
                <h3>IT TOOL {`&`} WEB III</h3>
              </div>
            </Link>
            <Link
              to="/Classroom/aand"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub4"
                onClick={() => props.setNavTitle("Adv. Android")}
              >
                <h3>Adv. Android</h3>
              </div>
            </Link>
            <Link
              to="/Classroom/adbms"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub5"
                onClick={() => props.setNavTitle("Adv. DBMS")}
              >
                <h3>ADBMS</h3>
              </div>
            </Link>
            <Link
              to="/Classroom/corejava"
              style={{
                cursor: "pointer",
                color: "inherit",
                textDecoration: "inherit",
              }}
              data-bs-dismiss="offcanvas"
            >
              <div
                className="sub sub6"
                onClick={() => props.setNavTitle("CORE JAVA")}
              >
                <h3>CORE JAVA</h3>
              </div>
            </Link>
          </div>
          <hr style={{ marginTop: "0em" }} />
        </div>
        {/* <div
          className="refresh"
          onClick={handleClick}
          data-bs-dismiss="offcanvas"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
            </svg>{" "}
            Refresh
          </div>
        </div> */}
      </div>
      <div style={{ height: "70px" }}></div>
    </>
  );
}

export default Navbar;
