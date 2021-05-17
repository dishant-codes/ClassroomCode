import React, { useEffect } from "react";
import hljs from "highlight.js/lib/core";
import "highlight.js/styles/vs2015.css";

function Highlight(props) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <>
      <div className="mt-1 mb-1 ">
        <pre>
          <code language={props.language}>{props.code}</code>
        </pre>
      </div>
    </>
  );
}

export default Highlight;
