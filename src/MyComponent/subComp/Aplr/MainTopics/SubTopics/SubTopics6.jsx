import formulae from "./equation/formulae.jpg";
import ascending from "./equation/ascending.jpg";
import descending from "./equation/descending.jpg";

const SubTopics6 = [
  {
    id: 1,
    title: (
      <>
        <em> # Some basic formulae: -</em>
      </>
    ),
    descp: (
      <>
        <br />
        <img
          className="img-fluid img"
          src={formulae}
          alt="loading..."
          height="auto"
          width="auto"
          style={{ borderRadius: "20px", boxShadow: "2px 2px 8px black" }}
        />
        <hr />
        <p>
          <br />
          <strong>
            <em> Ex. </em>
          </strong>{" "}
          <br />
          &nbsp;&nbsp; Convert the following into vulgar function .<br />
          <br />1{")"} 0.75 = 75/100 = 3/4
          <br />2{")"} 3.004 = 3004/1000 = 751/25 <br />
          <br />
          <strong>
            <em> Ex. </em>
          </strong>{" "}
          <br />
          &nbsp;&nbsp; Arrange the fraction <br />
          <br />1{")"} 5/8, 7/12, 13/16, 16/29 {"&"} 3/4 .<br />
          &nbsp;&nbsp; Convert each of the fraction into decimal form,
          <br />
          <strong>
            <em>
              <u>Sol'n</u>
            </em>
          </strong>
          : - <br />
          &nbsp;&nbsp; 5/8 = 0.625 <br />
          &nbsp;&nbsp; 7/12 = 0.583 <br />
          &nbsp;&nbsp; 13/16 = 0.812 <br />
          &nbsp;&nbsp; 16/29 = 0.551 <br />
          &nbsp;&nbsp; 3/4 = 0.750 <br />
          <br /> 0.551
          {"<"} 0.583 {"<"} 0.625 {"<"} 0.750 {"<"} 0.812 <br />
          <br />
          <img
            className="img-fluid img"
            src={ascending}
            alt="loading..."
            height="auto"
            width="70%"
            style={{ borderRadius: "10px", boxShadow: "2px 2px 8px black" }}
          />
          <br />
          <br /> 2{")"} 3/5, 4/7, 8/9, 9/11.
          <br />
          &nbsp;&nbsp; Convert each of the fraction into decimal form,
          <br />
          <strong>
            <em>
              <u>Sol'n</u>
            </em>
          </strong>
          : - <br />
          &nbsp;&nbsp; 3/5 = 0.600 <br />
          &nbsp;&nbsp; 4/7 = 0.571 <br />
          &nbsp;&nbsp; 8/9 = 0.888 <br />
          &nbsp;&nbsp; 9/11 = 0.818 <br />
          <br /> 0.888 {">"} 0.818 {">"} 0.600 {">"} 0.571 <br />
          <br />
          <img
            className="img"
            src={descending}
            alt="loading..."
            height="100px"
            width="70%"
            style={{ borderRadius: "10px", boxShadow: "2px 2px 8px black" }}
          />
          <br />
        </p>
      </>
    ),
  },
];

export default SubTopics6;
