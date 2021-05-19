import add from "./equation/add.jpg";
import sub from "./equation/sub.jpg";
import into100 from "./equation/into100.jpg";
import into10000 from "./equation/into10000.jpg";

const SubTopics5 = [
  {
    id: 1,
    title: <>#1{")"} Decimal Fraction :- </>,
    descp: (
      <>
        &nbsp;Fraction in which denominator are powers of 10 are known as{" "}
        <strong> decimal fraction </strong>.<br />
        <br />
        1/100 = 1 Ten'th = 0.1
        <br />
        1/100 = 1 Hundred'th = 0.01 <br />
        99/100 = 99 Hundred'th = 0.99
        <br />
        7/1000 = 7 Thousand'th = 0.007
        <br />
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: <>#2{")"} Conversion of decimal into vulgar :-</>,
    descp: (
      <>
        &nbsp;Put 1 in the denominator under the decimal point & end with it ,
        as many zero as is the number of digit after the decimal. <br />
        <br /> &nbsp; &nbsp; Ex. 0.25 = 25/100 <br />
        &nbsp; &nbsp; &nbsp; &nbsp; 2.008 = 2008/1000
        <br />
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        #3{")"}. a{")"}
      </>
    ),
    descp: (
      <>
        &nbsp;Annexing zeros to the extreme right of decimal fraction does not
        changes value .<br />
        &nbsp; &nbsp; &nbsp; &nbsp; 0.8 = 0.80 , 0.800 = 0.8000 etc.
        <br />
        <br />
        <strong> #3. b {")"} </strong>If the numerator & denominator of a
        fraction contain the same number of decimal places , then remove the
        decimal sign.
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; 1.84 / 2.99 = 184 / 299 <br />
        &nbsp; &nbsp; &nbsp; &nbsp; 0.365 / 0.584 = 365 / 584 <br />
        <br />
      </>
    ),
  },
  {
    id: 4,
    title: <>#4{")"} Operation on decimal Fraction :-</>,
    descp: (
      <>
        <br />
        &nbsp;&nbsp;
        <strong> A {")"} Addition & Subtraction of decimal fraction :-</strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; The given numbers are also place under place
        that a decimal points lies in one column . The numbers so arrange can
        now be added ot Subtracted in the usual way . <br />
        <div className="equations">
          <img
            className="img"
            src={add}
            alt="loading..."
            height="70px"
            width="150px"
          />
          <img
            className="img"
            src={sub}
            alt="loading..."
            height="70px"
            width="150px"
          />
        </div>
      </>
    ),
  },
  {
    id: 5,
    title: <></>,
    descp: (
      <>
        &nbsp;&nbsp;
        <strong>
          B {")"} Multiplication of decimal fraction by power of 10 :-
        </strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;If the decimal points to the right by as many
        places as is the power of ten.
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Ex . 5.9632 * 100 = 596.32 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Ex . 7.3212 * 10 = 73.212
        <br />
        <br />
      </>
    ),
  },
  {
    id: 6,
    title: <></>,
    descp: (
      <>
        &nbsp;&nbsp;
        <strong>C {")"} Multiplication of Decimal Fraction :-</strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Multiply the given number considering them
        without the decimal point , Now in the product , the decimal point is
        must of to obtain as many places of decimal as the sum of the number of
        decimal number in given number .<br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Ex. 0.2 * 0.02 * 0.002 = <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = (2*2*2 = 8 ) <br />
        &nbsp;&nbsp;&nbsp;&nbsp; sum of decimal places = 1+2+3 = 6 <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = 0.0000008
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Ex. 1.2 * 0.02 * 0.0004 = <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = (12*2*4 = 96 ) <br />
        &nbsp;&nbsp;&nbsp;&nbsp; sum of decimal places = 1+2+4 = 7 <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = 0.000000096
        <br />
        <br />
      </>
    ),
  },
  {
    id: 7,
    title: <></>,
    descp: (
      <>
        &nbsp;&nbsp;
        <strong>
          E {")"}Dividing a decimal fraction by decimal fraction :-
        </strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Multiply both dividend & devisor by suitable
        power of 10 to make devisor whole number .<br />
        <br />
        <div>
          <img
            className="img"
            src={into100}
            alt="loading..."
            height="70px"
            width="300px"
            style={{ borderRadius: "10px", boxShadow: "2px 2px 8px black" }}
          />{" "}
          <br />
          <br />
          <img
            className="img"
            src={into10000}
            alt="loading..."
            height="70px"
            width="300px"
            style={{ borderRadius: "10px", boxShadow: "2px 2px 8px black" }}
          />
        </div>
        <br />
        <br />
      </>
    ),
  },
  {
    id: 8,
    title: <></>,
    descp: (
      <>
        &nbsp;&nbsp;
        <strong>F {")"} Comparison of fraction :-</strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; Suppose some fraction or to be arranged in
        ascending or descending of magnitude then convert each of the fraction
        in the decimal form on arrange them according to following steps, <br />
        <br />
        <strong>
          <em>Eg,</em>
        </strong>
        <br />
        3/5 , 6/7 , 7/9 <br />
        Suppose we have to arrange all these three in descending order.
        <br />
        3/5 = 0.600
        <br />
        6/7 = 0.857
        <br />
        7/9 = 0.777
        <br />
        0.857 {">"} 0.777 {">"} 0.600
        <br />
        <br />
      </>
    ),
  },
  {
    id: 9,
    title: <></>,
    descp: (
      <>
        &nbsp;&nbsp;
        <strong>G {")"} Recurring Decimal :-</strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; If in decimal fraction a figure or set of
        figure is repeated continuously then such number is called{" "}
        <strong>
          <em>recurring</em>
        </strong>
        decimal . In recurring decimal if figure is repeated it is expressed by
        putting bar on the set .
        <br />{" "}
        <strong>
          <em>Eg, </em>
        </strong>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; 1/3 = 0.3333333... = 0.
        <span style={{ textDecoration: "overline" }}>3</span>
        <br />
        <br />
      </>
    ),
  },
];

export default SubTopics5;
