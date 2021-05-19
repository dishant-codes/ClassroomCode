import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import "./AdbTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import $ from "jquery";
const topics = [
  {
    id: 0,
    heading: "ADBMS TPOICS",
    data: (
      <>
        <div className="adbcard-2">
          <h6
            id="forDbcard-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subDbcard-1").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 SQL Function
          </h6>
          <h6
            id="forDbcard-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subDbcard-2").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Methods
          </h6>
          <h6
            id="forDbcard-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subDbcard-3").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 SQL Database For Oraganizations
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
                <>{val.descp}</>
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
