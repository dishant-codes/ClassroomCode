import React from "react";
import topics from "./ApTopicsData";
import "./ApTopics.css";
function ApTopics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div key={index} className="apcard-1 my-2" id={val.id}>
            <h1 className="aphead my-2">{val.heading}</h1>
            <>{val.data}</>
          </div>
        );
      })}
    </>
  );
}

export default ApTopics;
