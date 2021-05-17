import Highlight from "../../../../Highlight";
const codeString1 = ` SQL > CREATE TABLE STUDENT_DETAILS (ROLL_NO INT, NAME VARCHAR(20), class VARCHAR(20),BRANCH VARCHAR(20),PERCENTAGE FLOAT(4));
 SQL > DESC STUDENT_DETAILS 
 SQL > INSERT INTO STUDENT_DETAILS VALUES (10,'AAA','II Year','B.Sc IT','74.0');
 SQL > INSERT INTO STUDENT_DETAILS VALUES (2,'BBB','II Year','B.Sc IT','58.7');
 SQL > INSERT INTO STUDENT_DETAILS VALUES (15,'CCC','II Year','B.Sc IT','72.8');
 SQL > INSERT INTO STUDENT_DETAILS VALUES (9,'DDD','II Year','B.Sc IT','54.4');
 SQL > INSERT INTO STUDENT_DETAILS VALUES (11,'EEE','II Year','B.Sc IT','70.2');`;

const codeString2 = ` SQL > CREATE TABLE ACCOUNT_DETAILS (AC_NO NUMBER, AC_HOLDER VARCHAR(20), AC_TYPE VARCHAR(20),BALANCE NUMBER,LOAN VARCHAR(10));
 SQL > DESC ACCOUNT_DETAILS 
 SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (01,'AAA','SAVING',4000,'NO');
 SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (02,'BBB','SAVING',5400,'NO');
 SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (03,'CCC','SAVING',6400,'NO');
 SQL > INSERT INTO  ACCOUNT_DETAILS VALUES (04,'DDD','SAVING',4000,'YES');`;

const subTopics3 = [
  {
    id: 1,
    title: <></>,
    descp: (
      <>
        Using SQL Command CREATE TABLE {`&`} views of five schemas for any
        organization like college, bank, hospital, travel agency, books details.
      </>
    ),
  },
  {
    id: 2,
    title: <> 1{`)`} STUDENT_DETAILS :-</>,
    descp: (
      <>
        <Highlight code={codeString1} language="sql" />
        <div className="table-responsive">
          <table className="table bg-dark table-sm align-middle">
            <thead>
              <tr>
                <th scope="col">ROLL_NO</th>
                <th scope="col">NAME</th>
                <th scope="col">class</th>
                <th scope="col">BRANCH</th>
                <th scope="col">PERCENTAGE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">10</th>
                <td>AAA</td>
                <td>II Year</td>
                <td>B.Sc IT </td>
                <td>74.0</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>BBB</td>
                <td>II Year</td>
                <td>B.Sc IT </td>
                <td>58.7</td>
              </tr>
              <tr>
                <th scope="row">15</th>
                <td>CCC</td>
                <td>II Year</td>
                <td>B.Sc IT </td>
                <td>72.8</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>DDD</td>
                <td>II Year</td>
                <td>B.Sc IT </td>
                <td>54.4</td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>EEE</td>
                <td>II Year</td>
                <td>B.Sc IT </td>
                <td>70.2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    id: 3,
    title: <>2{`)`} ACCOUNT_DETAILS :-</>,
    descp: (
      <>
        <Highlight code={codeString2} language="sql" />
        <div className="table-responsive">
          <table className="table bg-dark table-sm align-middle">
            <thead>
              <tr>
                <th scope="col">AC_NO</th>
                <th scope="col">AC_HOLDER</th>
                <th scope="col">AC_TYPE</th>
                <th scope="col">BALANCE</th>
                <th scope="col">LOAN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">01</th>
                <td>AAA</td>
                <td>SAVING</td>
                <td>4000</td>
                <td>NO</td>
              </tr>
              <tr>
                <th scope="row">02</th>
                <td>BBB</td>
                <td>SAVING</td>
                <td>5400</td>
                <td>NO</td>
              </tr>
              <tr>
                <th scope="row">03</th>
                <td>CCC</td>
                <td>SAVING</td>
                <td>6400</td>
                <td>NO</td>
              </tr>
              <tr>
                <th scope="row">04</th>
                <td>DDD</td>
                <td>SAVING</td>
                <td>4000</td>
                <td>YES</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
];
export default subTopics3;
