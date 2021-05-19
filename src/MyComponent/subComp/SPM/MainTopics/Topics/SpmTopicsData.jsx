import subTopics1 from "../SubTopics/SubTopics1";
import "./SpmTopics.css";
import $ from "jquery";

const topics = [
  {
    id: 0,
    heading: "SPM TPOICS",
    data: (
      <>
        <div className="spmcard-2">
          <h6
            id="forSpmcard-1"
            style={{ cursor: "pointer" }}
            onClick={() => {
              $("html, body").animate(
                {
                  scrollTop: $("#subSpmcard-1").offset().top - 60,
                },
                2
              );
            }}
          >
            👉 Stepwise Project Planning
          </h6>
        </div>
      </>
    ),
  },
  {
    id: 1,
    heading: "Stepwise Project Planning",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="spmcard-2">
                <b>{val.title}</b>
                <div style={{ margin: "0 auto" }}>{val.descp}</div>
              </div>
            </>
          );
        })}
      </>
    ),
  },
];
export default topics;
