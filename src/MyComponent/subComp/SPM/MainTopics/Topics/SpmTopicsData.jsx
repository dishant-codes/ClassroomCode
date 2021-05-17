import subTopics1 from "../SubTopics/SubTopics1";
import "./SpmTopics.css";
const topics = [
  {
    id: 1,
    heading: "SPM",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="spmcard-2">
                <b>{val.title}</b>
                <div>{val.descp}</div>
              </div>
            </>
          );
        })}
      </>
    ),
  },
];
export default topics;
