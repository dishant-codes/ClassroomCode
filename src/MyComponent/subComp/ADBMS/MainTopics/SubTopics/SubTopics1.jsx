import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/src/styles/hljs/a11y-dark";
const subTopics1 = [
  {
    id: 1,
    title: <> 1{`)`} Functions :- </>,
    descp: (
      <>
        <ul>
          <li>
            &nbsp;Oracle SQL supplies a rich library of in-built function ,
            which can be employed for various task .
            <br />
          </li>
          <li>
            &nbsp;The Essential Capabilities of a function can be the case
            conversion of string . In String or a sub-string operation ,
            mathematical computation on numeric data operations on date type
            value .<br />
          </li>
          <li>
            &nbsp;SQL function optionally take arguments from user and mandatory
            return the value.
          </li>
          <li>
            On-broader Category there are 2 types of function <br />
            i.e.
            <br />
            Single Row Function {`&`} <br />
            Multiple Row Function
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 2,
    title: <> 2 {`)`} Types of Function :- </>,
    descp: (
      <>
        &nbsp;&nbsp;<strong> A {")"} Single Row Function </strong>
        <br />
        &nbsp;&nbsp;&nbsp;Single Row Function are one who work on a single row
        and return one output per row.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; <em>eg. ,</em> <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;length and case conversion functions
        are single row function
        <br />
        <br />
        &nbsp;&nbsp;<strong> B {")"} Multiple Row Function </strong>
        <br />
        &nbsp;&nbsp;&nbsp; Multiple Row Function work upon group of rows & return one result for complete set of rows, they are also known as{" "}
        <strong>
          <u>group function </u>
        </strong>
      </>
    ),
  }
];
export default subTopics1;
