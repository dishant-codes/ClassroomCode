import subTopics1 from "../SubTopics/SubTopics1";
import "./ItTopics.css";
const topics = [
  {
    id: 1,
    heading: "IT TOOl",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="itcard-2">
                <b>{val.title}</b>
                <p>{val.descp}</p>
              </div>
            </>
          );
        })}
      </>
    ),
  },
];
export default topics;
