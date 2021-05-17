import React from "react";
import topics from "./AndTopicsData";
import "./AndTopics.css";
function AndTopics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div key={index} className="mb-1" id={"subAndcard-" + val.id}>
            <div className="andcard-1 my-2">
              <h1 className="andhead my-2">{val.heading}</h1>
              <>{val.data}</>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AndTopics;
