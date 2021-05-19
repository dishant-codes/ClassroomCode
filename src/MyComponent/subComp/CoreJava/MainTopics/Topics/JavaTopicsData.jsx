import subTopics1 from "../SubTopics/SubTopics1";
import SubTopics2 from "../SubTopics/SubTopics2";
import "./JavaTopics.css";
import $ from "jquery";
const topics = [
  {
    id: 0,
    heading: "Java TOPICS",
    data: (
      <>
        <div className="javacard-2">
          <h6
            id="forJavacard-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subJavacard-1").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Object Oriented Programming
          </h6>
          <h6
            id="forJavacard-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subJavacard-2").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 History of JAVA
          </h6>
        </div>
      </>
    ),
  },
  {
    id: 1,
    heading: "Object Oriented Programming",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="javacard-2">
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
    id: 2,
    heading: "History of JAVA",
    data: (
      <>
        {SubTopics2.map((val, index) => {
          return (
            <>
              <div key={index} className="javacard-2">
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
