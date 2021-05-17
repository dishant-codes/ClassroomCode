import React from "react";
import topics from "./ItTopicsData";
import "./ItTopics.css";
function Topics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div key={index} className="itcard-1 my-2">
            <h1 className="ithead my-2">{val.heading}</h1>
            <>{val.data}</>
          </div>
        );
      })}
    </>
  );
}

export default Topics;
