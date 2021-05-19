import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preload">
      <div className="wrap">
        <div className="loading">
          <div className="bounceball"></div>
          <div className="text">NOW LOADING</div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
