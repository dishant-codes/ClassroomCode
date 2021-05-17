import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import "./AndTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
const topics = [
  {
    id: 0,
    heading: "Adv. Android Topics",
    data: (
      <>
        <div className="andcard-2">
          <h6>
            <NavLink
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "inherit",
              }}
              smooth
              to="/Classroom/aand#1"
              activeClassName="selected"
              // etc...
            >
              👉 Camera
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
              to="/Classroom/aand#2"
              activeClassName="selected"
              // etc...
            >
              👉 GPS
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
              to="/Classroom/aand#3"
              activeClassName="selected"
              // etc...
            >
              👉 Accelerometer
            </NavLink>
          </h6>
        </div>
      </>
    ),
  },
  {
    id: "1",
    heading: "1) Camera",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="andcard-2">
                <b>{val.title}</b>
                <div>{val.descp}</div>
              </div>
            </>
          );
        })}
      </>
    ),
  },
  {
    id: "2",
    heading: <>2{`)`} GPS</>,
    data: (
      <>
        {subTopics2.map((val, index) => {
          return (
            <>
              <div key={index} className="andcard-2">
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
    heading: "3) Accelerometer",
    data: (
      <>
        {subTopics3.map((val, index) => {
          return (
            <>
              <div key={index} className="andcard-2">
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
