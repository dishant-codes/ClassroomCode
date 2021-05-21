import React, { Suspense } from "react";
import "./Adbms.css";
import "../../Subjects/Subjects.css";
const Topics = React.lazy(() => import("./MainTopics/Topics/AdbTopics"));
function Adbms() {
  return (
    <>
      <div className="aplr">
        <div className="container">
          <div className="card5 mt-2 mb-1">
            <h1>ADBMS</h1>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="card5 mt-2 mb-1">
              <h1>Loading...</h1>
            </div>
          }
        >
          <Topics key="1" />
        </Suspense>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Adbms;
