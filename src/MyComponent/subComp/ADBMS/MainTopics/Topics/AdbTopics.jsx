import React from "react";
import topics from "./AdbTopicsData";
import "./AdbTopics.css";
function Topics() {
  return (
    <>
      {topics.map((val, index) => {
        return (
          <>
            <div key={index} className="adbcard-1 my-2" id={val.id}>
              <h1 className="adbhead my-2">{val.heading}</h1>
              <>{val.data}</>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Topics;
