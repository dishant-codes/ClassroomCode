import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import subTopics4 from "../SubTopics/SubTopics4";
import "./ApTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
const topics = [
  {
    id: 0,
    heading: "APLR TPOICS",
    data: (
      <>
        <div className="apcard-2">
          <h6 id="forApcard-1" style={{ cursor: "pointer" }}>
            👉 Number System
          </h6>
          <h6 id="forApcard-2" style={{ cursor: "pointer" }}>
            👉 Numbers
          </h6>
          <h6 id="forApcard-3" style={{ cursor: "pointer" }}>
            👉 Face Value {`&`} Place Value
          </h6>
          <h6 id="forApcard-4" style={{ cursor: "pointer" }}>
            👉 Test of Divisibility
          </h6>
        </div>
      </>
    ),
  },
  {
    id: "1",
    heading: "Number System",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
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
    heading: "Numbers",
    data: (
      <>
        {subTopics2.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
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
    heading: "Face Value & Place Value",
    data: (
      <>
        {subTopics3.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
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
    id: "4",
    heading: "Test of Divisibility",
    data: (
      <>
        {subTopics4.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
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
