import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import "./AdbTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
const topics = [
  {
    id: 0,
    heading: "ADBMS TPOICS",
    data: (
      <>
        <div className="adbcard-2">
          <h6>
            <NavLink
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              smooth
              to="/Classroom/adbms#1"
              activeClassName="selected"
              // etc...
            >
              👉 SQL Function
            </NavLink>
          </h6>
          <h6>
            <NavLink
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              smooth
              to="/Classroom/adbms#2"
              activeClassName="selected"
              // etc...
            >
              👉 Methods
            </NavLink>
          </h6>
          <h6>
            <NavLink
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              smooth
              to="/Classroom/adbms#3"
              activeClassName="selected"
              // etc...
            >
              👉 SQL Database For Oraganizations
            </NavLink>
          </h6>
        </div>
      </>
    ),
  },
  {
    id: "1",
    heading: "SQL Function ",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="adbcard-2">
                <b>{val.title}</b>
                <p>{val.descp}</p>
              </div>
            </>
          );
        })}
      </>
    ),
  },
  {
    id: "2",
    heading: "Methods",
    data: (
      <>
        {subTopics2.map((val, index) => {
          return (
            <>
              <div key={index} className="adbcard-2">
                <b>{val.title}</b>
                <>{val.descp}</>
              </div>
            </>
          );
        })}
      </>
    ),
  },
  {
    id: "3",
    heading: "SQL Database For Oraganizations",
    data: (
      <>
        {subTopics3.map((val, index) => {
          return (
            <>
              <div key={index} className="adbcard-2">
                <b>{val.title}</b>
                <>{val.descp}</>
              </div>
            </>
          );
        })}
      </>
    ),
  },
];
export default topics;
