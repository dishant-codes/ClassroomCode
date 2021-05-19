import subTopics1 from "../SubTopics/SubTopics1";
import subTopics2 from "../SubTopics/SubTopics2";
import subTopics3 from "../SubTopics/SubTopics3";
import subTopics4 from "../SubTopics/SubTopics4";
import SubTopics5 from "../SubTopics/SubTopics5";
import SubTopics6 from "../SubTopics/SubTopics6";
import "./ApTopics.css";
import { NavHashLink as NavLink } from "react-router-hash-link";
import $ from "jquery";
const topics = [
  {
    id: 0,
    heading: "APLR TOPICS",
    data: (
      <>
        <div className="apcard-2">
          <h6
            id="forApcard-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-1").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Number System
          </h6>
          <h6
            id="forApcard-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-2").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Numbers
          </h6>
          <h6
            id="forApcard-3"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-3").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Face Value {`&`} Place Value
          </h6>
          <h6
            id="forApcard-4"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-4").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Test of Divisibility
          </h6>
          <h6
            id="forApcard-5"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-5").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Rules
          </h6>
          <h6
            id="forApcard-6"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subApcard-6").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Formulas
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
  {
    id: "5",
    heading: "Rules",
    data: (
      <>
        {SubTopics5.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
                <b>{val.title}</b>
                <br />
                <>{val.descp}</>
              </div>
            </>
          );
        })}
      </>
    ),
  },
  {
    id: "6",
    heading: "Formulas",
    data: (
      <>
        {SubTopics6.map((val, index) => {
          return (
            <>
              <div key={index} className="apcard-2">
                <b>{val.title}</b>
                <br />
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
