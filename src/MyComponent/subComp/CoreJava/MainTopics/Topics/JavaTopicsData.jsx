import subTopics1 from "../SubTopics/SubTopics1";
import "./JavaTopics.css";
const topics = [
  {
    id: 1,
    heading: "Core Java",
    data: (
      <>
        {subTopics1.map((val, index) => {
          return (
            <>
              <div key={index} className="javacard-2">
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
