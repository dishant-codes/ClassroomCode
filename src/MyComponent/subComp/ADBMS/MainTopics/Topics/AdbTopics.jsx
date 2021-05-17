import React from "react";
import topics from "./AdbTopicsData";
import "./AdbTopics.css";
function Topics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <div
            key={index}
            id={"subDbcard-" + val.id}
            className="adbcard-1 my-2"
          >
            <h1 className="adbhead my-2">{val.heading}</h1>
            <>{val.data}</>
          </div>
        );
      })}
    </>
  );
}

export default Topics;
