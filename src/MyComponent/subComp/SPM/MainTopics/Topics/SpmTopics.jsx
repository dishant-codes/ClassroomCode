import React from "react";
import topics from "./SpmTopicsData";
import "./SpmTopics.css";
function SpmTopics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div key={index} className="spmcard-1 my-2">
            <h1 className="spmhead my-2">{val.heading}</h1>
            <>{val.data}</>
          </div>
        );
      })}
    </>
  );
}

export default SpmTopics;
