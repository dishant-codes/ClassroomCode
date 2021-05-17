import React from "react";
import topics from "./JavaTopicsData";
import "./JavaTopics.css";
function Topics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div key={index} className="javacard-1 my-2">
            <h1 className="javahead my-2">{val.heading}</h1>
            <>{val.data}</>
          </div>
        );
      })}
    </>
  );
}

export default Topics;
