import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import "./AndTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import $ from "jquery";
const topics = [
  {
    id: 0,
    heading: "Adv. Android Topics",
    data: (
      <>
        <div className="andcard-2">
          <h6
            id="forAndcard-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subAndcard-1").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Camera
          </h6>
          <h6
            id="forAndcard-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subAndcard-2").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 GPS
          </h6>
          <h6
            id="forAndcard-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subAndcard-3").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Accelerometer
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
