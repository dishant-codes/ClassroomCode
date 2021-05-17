import Highlight from '../../../../Highlight'
const codeString1 = `CREATE TABLE table_name (
    column_name1 data_type(size),
    column_name2 data_type(size);
);`;
const codeString2 = `CREATE TABLE persons (
    Person_Id  int ,
    Last_Name varchar(225) ,
    First_Name varchar(225) ,
    Address varchar(225) ,
    City varchar(225) ,
);`;
const codeString3 = `ALTER TABLE <table_name> DROP COLUMN column_name 
ALTER TABLE student DROP COLUMN course`;
const codeString4 = `ALTER TABLE <table_name> RENAME COLUMN <Old_name> TO <New_name>`;
const codeString5 = `TRUNCATE TABLE <table_name>`;
const codeString6 = `DROP TABLE <table_name>`;
const codeString7 = `RENAME TABLE <Old_name> TO <New_name>`;
const subTopics1 = [
  {
    id: 1,
    title: <> 1{`)`} CREATE :-</>,
    descp: (
      <>
        <ul>
          <li>
            <p>
              &nbsp;Create Command is used to create a table in the database .
              <br />
            </p>
          </li>
          <li>
            The{" "}
            <span
              style={{ backgroundColor: "black", padding: "0px 6px 1px 6px" }}
            >
              CREATE TABLE
            </span>{" "}
            command defines each column has minimum of three attributes . <br />
          </li>
        </ul>
        <ul style={{ listStyleType: "square", marginLeft: "2em" }}>
          <li>Name</li>
          <li style={{ marginTop: "0px" }}>Data Type </li>
          <li style={{ marginTop: "0px" }}> Size (Column Width )</li>
        </ul>
        <b> Syntax :-</b>
        <Highlight language="sql" code={codeString1} />
        <b> Ex :-</b>
        <Highlight language="sql" code={codeString2} />
      </>
    ),
  },
  {
    id: 2,
    title: <> 2 {`)`} ALTER :- </>,
    descp: (
      <>
        <ul>
          <li>
            ALTER Command will be used to modify the structure of the existing
            table using ALTER we can do following things .
          </li>
          <br />
          <li>Add new columns to the table.</li>
          <b>Syntax :-</b>
          <br />
          <Highlight language="sql"
            code={`ALTER TABLE student ADD ( Location varchar2(30));`}
          />
          <li>
            Removing existing column from table.
            <br />
            <b>Syntex:-</b>
            <Highlight language="sql" code={codeString3} />
          </li>
          <li>
            Modify columns data type size of the table
            <br />
            <b>Example :- </b>
            <Highlight language="sql"
              code={`ALTER TABLE Student MODIFY (Name varchar2(20));`}
            />
            <span style={{ color: "violet", fontWeight: "bold" }}>
              <u>Change the name of the column of the table :-</u>
            </span>
            <br />
            <b>Syntax :-</b>
            <br />
            <div style={{ marginBottom: "2px" }}></div>
            <Highlight language="sql" code={codeString4} />
            <b>Example :-</b>
            <Highlight language="sql"
              code={`ALTER TABLE student RENAME COLUMN Location TO Branch`}
            />
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: <>3{`)`} TRUNCATE</>,
    descp: (
      <>
        <ul>
          <li>
            <b>TRUNCATE</b> command used to remove the data from the table.
            <br />
            <b>Syntax :-</b>
            <div style={{ marginBottom: "2px" }}></div>
            <Highlight language="sql" code={codeString5}/>
            <b>Ex :-</b>
            <Highlight language="sql" code={`TRUNCATE TABLE Student`}/>
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: <>4{`)`} DROP</>,
    descp: (
      <>
        <ul>
          <li>
            <b>DROP</b> Command used to remove table from the database.
          </li>
          <li>
            It removes entire table from the database along with data present in
            it.
            <br />
            <b>Syntax :-</b>
            <div style={{ marginBottom: "2px" }}></div>
            <Highlight language="sql" code={codeString6} />
            <b>Ex :-</b>
            <Highlight language="sql" code={`DROP TABLE Student`} />
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: <>5{`)`} RENAME</>,
    descp: (
      <>
        <ul>
          <li>
            <b>RENMAE</b> Command used to change the name of database objects
            like table , view etc.
          </li>
          <li>
            Using this command we can change only the name of database object
            not the columns of the table.
            <br />
            <b>Syntax :-</b>
            <div style={{ marginBottom: "2px" }}></div>
            <Highlight language="sql" code={codeString7} />
            <b>Ex :-</b>
            <Highlight language="sql" code={`RENAME Student TO Student_data`} />
          </li>
        </ul>
      </>
    ),
  },
];
export default subTopics1;
