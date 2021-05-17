import React, { useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/src/styles/hljs/a11y-dark";

function Highlight(props) {
  return (
    <>
      <div className="mt-1 mb-1 ">
        <SyntaxHighlighter language={props.language} style={dark}>
          {props.code}
        </SyntaxHighlighter>
      </div>
    </>
  );
}

export default Highlight;
