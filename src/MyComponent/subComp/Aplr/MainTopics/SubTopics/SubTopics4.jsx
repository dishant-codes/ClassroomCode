const subTopics4 = [
  {
    id: 1,
    title: <> 1{`)`} Divisibility of 2 :-</>,
    descp: (
      <>
        The Number of Divisible by 2 if it's unit digit (last digit) is
        divisible by any of " 0 , 2 , 4 , 6 , 8 " . <br />
        <br />
        Ex.5869<u>4</u> is divisible by 2 .<br />
        8694<u>5</u>
        is not divisible by 2.
      </>
    ),
  },
  {
    id: 2,
    title: <> 2{`)`} Divisibility of 3 :-</>,
    descp: (
      <>
        The number of divisibility by 3 only when the sum of its all digit is
        divisible by 3.
        <br />
        <br />
        Ex.695421 :-
        <br />
        Sum of all digit =<strong> 6+9+5+4+2+1 = 27</strong>
        <br />
        Hence, <u>695421</u> is divisible by 3.
        <br />
        <br />
        Ex.948653 :-
        <br />
        Sum of all digit =<strong> 9+4+8+6+5+3 = 35</strong>
        <br />
        Hence, <u>948653</u> is not divisible by 3.
        <br />
      </>
    ),
  },
  {
    id: 3,
    title: <> 3{`)`} Divisibility of 4 :-</>,
    descp: (
      <>
        A number is divisible by 4 when if it's last 2 digit is divisible by 4.
        <br />
        <br />
        Ex.6879376:- <br />
        last 2 digit 68793
        <u>
          <b>76</b>
        </u>{" "}
        = <strong> 76/4 = 19 </strong>, remainder = 0,
        <br />
        Hence, <u>6879376</u> is divisible by 4.
        <br />
        <br />
        Ex. &nbsp;496138:- <br />
        last 2 digit 4961
        <u>
          <b>38</b>
        </u>{" "}
        = <strong> 38/4 = 9 </strong>, remainder = 2,
        <br />
        Hence, <u>496138</u> is not divisible by 4.
        <br />
      </>
    ),
  },
  {
    id: 4,
    title: <> 4{`)`} Divisibility by 8 :-</>,
    descp: (
      <>
        <br /> &nbsp; A number is divisible by 8 when if the number formed by
        hundred's , ten's , unit's digit of the given number is divisible by 8.
        <br />
        <br />
        Ex. &nbsp;16789352:- <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 16789
        <u>
          <b>352</b>{" "}
        </u>{" "}
        = <strong> 352/8= 44</strong> , remainder = 0 ,<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Hence , <u>16789352</u> is
        divisible by 8 .<br />
        <br />
        Ex. &nbsp;576484:- <br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; 576<u>484</u> ={" "}
        <strong> 484/8 = 60 </strong> , remainder = 4 ,<br />
        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Hence , <u>576484</u> is not
        divisible by 8 .<br />
      </>
    ),
  },
  {
    id: 5,
    title: <> 5{`)`} Divisibility by 10 :-</>,
    descp: (
      <>
        <br />
        &nbsp; A number is divisible by 10 only when it's unit( Last Digit )
        digit is
        <u>0</u>.
        <br />
        Ex. &nbsp;657890 :- <br />
        &nbsp;&nbsp;&nbsp;65789<u>0</u> is divisible by 10 .<br />
        <br />
      </>
    ),
  },
  {
    id: 6,
    title: <> 6{`)`} Divisibility by 5 :-</>,
    descp: (
      <>
        <br />
        &nbsp; A number is divisible by 5 only when it's unit( Last Digit )
        digit is
        <u>0</u> OR <u>5</u>.<br />
        <br />
        Ex. &nbsp;65455 :- <br />
        &nbsp;&nbsp;&nbsp;6545<u>5</u> is divisible by 5 . <br />
        <br /> &nbsp;654550 :- <br />
        &nbsp;&nbsp;&nbsp;65455<u>0</u> is divisible by 5 . <br />
      </>
    ),
  },
  {
    id: 7,
    title: <> 7{`)`} Divisibility by 11 :-</>,
    descp: (
      <>
        <br />
        &nbsp; A number is divisible by 11 if the difference between the sum of
        its digit at odd places & sum of it's even places is either zero or
        divisible by 11 .<br />
        <br />
        <em
          style={{
            color: "rgb(0, 0, 0)",
            backgroundColor: "rgb(224, 141, 46)",
            fontWeight: "bolder",
            padding: ".2em",
          }}
        >
          (sum of it's odd places digits ) - ( sum of it's even places digits )
          = 0 / divisible by 11 .
        </em>
        <br />
        <br />
        Ex. &nbsp; 29435417 :- <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( 7 + 4 + 3 + 9 ) - ( 1 + 5 + 4 + 2
        ) =
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 12
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 11 <br />
        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11 / 11 =
        1 & remainder = 0 <br />
        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hence , 29435417 is
        divisible by 11 .
      </>
    ),
  },
  {
    id: 8,
    title: <> </>,
    descp: (
      <>
        <br />
        Ex. &nbsp; 57463822 :- <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ( 2 + 8 + 6 + 7 ) - ( 2 + 3 + 4 + 5
        ) =
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 14
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 9 <br />
        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 11 / 9 =
        .7 & remainder = 3 <br />
        <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hence , 57463822 is not
        divisible by 11 .<br />
      </>
    ),
  },
  {
    id: 9,
    title: <> </>,
    descp: (
      <>
        &nbsp; The Difference between the place value and face value of{" "}
        <b>
          {" "}
          <u>6</u>{" "}
        </b>{" "}
        in the numeral , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;85
        <u>6</u>973 , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Place Value of 6 = 6 *1000 = 6000 ,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Face Value of 6 = 6 , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Difference = 6000 - 6 = <b> 5994 </b>
      </>
    ),
  },
  {
    id: 10,
    title: <> </>,
    descp: (
      <>
        &nbsp; The Difference between the local value (place value) and face
        value of{" "}
        <b>
          <u>7</u>{" "}
        </b>{" "}
        in the numeral , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;326
        <u>7</u>5149 , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Place Value of &nbsp; 7 = 7 *10000 = 70000 ,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Face Value of &nbsp;&nbsp; 7 = 7 , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The
        Difference
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=
        70000 - 7 = <b> 69993 </b>
      </>
    ),
  },
  {
    id: 11,
    title: <> </>,
    descp: (
      <>
        &nbsp;The Unit digit in the product ,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 784 * 618 * 917 * 4633 = ?{" "}
        <br />
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 78<u>4</u> * 61<u>8</u> * 91
        <u>7</u> * 463<u>3</u> = <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4 *
        &nbsp;&nbsp;&nbsp;8 * &nbsp;&nbsp;&nbsp;7 *
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3 = 67
        <b>
          <u>2</u>
        </b>
        <br />
      </>
    ),
  },
  {
    id: 12,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9587 - ? =
        7429 - 4358 , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Consider , ? = x
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Hence
        ,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        9587 - &nbsp;&nbsp;x &nbsp;&nbsp;&nbsp; = 7429 - 4358 ,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        9587 - &nbsp; x &nbsp;&nbsp;&nbsp;&nbsp;= &nbsp;&nbsp;&nbsp; 3071 ,
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        9587 - 3071&nbsp; = &nbsp;&nbsp;&nbsp; x ,<br />
        <b>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          6516 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = &nbsp;&nbsp;&nbsp; x{" "}
        </b>{" "}
        ,<br />
      </>
    ),
  },
  {
    id: 13,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5793405 *
        9999 = ? , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        5793405 * (10000-1) = , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        57934050000 - 5793405 = <b>57928256595</b> , <br />
      </>
    ),
  },
  {
    id: 14,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 839478 *
        625 = ? , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        839478 * 625 = <b>524673750</b>
        <br />
      </>
    ),
  },
  {
    id: 15,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 976 * 237 +
        976 * 763 = ? , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 976
        *(237 + 763) = <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 976 *
        1000 =<b>976000</b> <br />
      </>
    ),
  },
  {
    id: 16,
    title: <> </>,
    descp: (
      <>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 986 * 307 -
        986 * 207 = ? , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 986
        *(307-207) = <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 976 *
        1000 =<b>98600</b> <br />
      </>
    ),
  },
  {
    id: 17,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1607 * 1607
        = ? , <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
        (1600+7)^2 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = (a
        + b)^2 = a^2+ 2ab + b^2 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
        (1600)^2 + 2 * (1600+7) + (7)^2 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
        2560000 + 22400 + 49 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ={" "}
        <b> 2582449 </b>
      </>
    ),
  },
  {
    id: 18,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1396 * 1396 = ? , <br />
        &nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp; (1400-4)^2 = <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(a - b)^2 = a^2 + b^2 - 2ab = <br />
        &nbsp;&nbsp;&nbsp;&nbsp;(1400)^2 + (4^)2 - 2 (1400-4) + (7)^2 <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = 1960000 +16 - 11200 <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = 1960016 - 11200 <br />
        &nbsp;&nbsp;&nbsp;&nbsp; = <b> 1948816 </b>
      </>
    ),
  },
  {
    id: 19,
    title: <> </>,
    descp: (
      <>
        &nbsp;&nbsp;&nbsp;&nbsp;Ex.
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (475*475+125*125) = ? , <br />
        &nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
        <br />
        &nbsp;&nbsp;&nbsp; ∴ (a^2 + b^2 ) = 1/2[(a+b)^2 + (a-b)^2] <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 1/2
        [(475+125)^2+(475-125)^2] <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 1/2
        [(600)^2 + (350)^2] <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; = 1/2
        [360000 + 122500] <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
        482500 / 2 <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ={" "}
        <b> 241250 </b>
      </>
    ),
  },
  {
    id: 20,
    title: <>H.W</>,
    descp: (
      <>
        <p>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b>
            {" "}
            Ex. 1{")"} <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </b>
          (796*796-204*204) = ? , <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b> ∴ a^2 - b^2 = (a+b) * (a-b) </b> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Here , a= 796 & b=204
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          (796+204) * (796-204) <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          1000 * 592 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          592000 <br />
        </p>
        <p>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <b> Ex. 2{")"} </b>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 387*387 +
          113*113 + 2*387*113 = ? , <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b> ∴ a^2 + b^2 + 2ab = (a+b)^2 </b> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Here , a= 387 & b=113
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          (387+113)^2 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          500^2 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          250000 <br />
        </p>
        <p>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp; <b> Ex. 3{")"} </b> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 87*87 +
          61*61 - 2*87*61 = ? , <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Sol'n :-</u>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <b> ∴ a^2 + b^2 - 2ab = (a-b)^2 </b> <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Here , a= 387 & b=113
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          (87-61)^2 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          26^2 <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =
          676 <br />
        </p>
      </>
    ),
  },
];
export default subTopics4;
