const subTopics1 = [
  {
    id: 1,
    title: <></>,
    descp: (
      <>
        <p>
          &nbsp;&nbsp; Object Oriented Programming is an approach that provides
          the method of modularizing program. It Create the partition of memory
          area that stores the data & function. This partitions of memory are
          independent, So the objects can be used in different programs without
          any modification.
          <br />
          &nbsp;&nbsp; Object Oriented Programming allows user to decompose a
          problem into a number of entity called <strong>" Object "</strong>. It
          builds data & function more close to the Object. The Combination of
          data & methods made an objects . The data of an object can be access
          by the methods associated with that object or in other words we can
          sat that the methods can use only the data provided in the class.
          <br />
        </p>
        <br />
        <strong> # Concepts of OOP: - </strong>
        <ul className="ml-2">
          <li> Class </li>
          <li> Object</li>
          <li> Data Abstraction </li>
          <li> Inheritance </li>
          <li> Polymorphism </li>
          <li> Encapsulation </li>
          <li> Dynamic Binding </li>
          <li> Message Communication </li>
        </ul>
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: (
      <>
        <em> 1{")"} Class: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              The set of Data & Functions create a user-defined datatype class
              <strong> "Class" </strong>.
            </li>
            <li>
              Class is category , it is Collection of objects , a class is
              template or plan actually class is describe the object once the
              class is defined we can create any number of object that belongs
              to it.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: (
      <>
        <em> 2{")"} Object: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              {" "}
              Object may represent a place, bank account a table of data etc.{" "}
            </li>
            <li>
              {" "}
              It may anything , it is a basic <strong>runtime entity</strong> in
              object oriented system, When program is executed the objects
              interact by sending message to one another.{" "}
            </li>
            <li>
              Eg. <br />
              &nbsp;&nbsp;If customer and account are two objects in program a
              customer object can send a request to the account object asking
              for a bank balance .
            </li>
            <li>
              Each object contains data & code to manipulate the data, the
              object can interact with one another without interfering each
              others data.{" "}
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: (
      <>
        <em> 3{")"} Data Abstraction:-</em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              Data Abstraction means the act of representing essential feature
              without including background details or explanation .{" "}
            </li>
            <li>
              Eg.
              <br />
              &nbsp;&nbsp; When customer purchase any electronic appliance he or
              she only understand its basic function for its proper working
              without knowing the inner details of the machine.
            </li>
            <li>
              Class use the concept of abstraction & are defined as a of list
              abstract attributes. Such as ,size , cost , & method to operator
              on these attributes .
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: (
      <>
        <em> 4{")"} Encapsulation: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              {" "}
              Data Encapsulation means wrapping up of data & method into single
              unit.
            </li>
            <li> The single unit nothing but the class.</li>
            <li>
              {" "}
              The class encapsulate all essential property of object that are to
              be created.
            </li>
            <li>
              {" "}
              The data is not accessible to the outside world , only those
              method that are wrapped inside the class can access it .
            </li>
            <li>
              <strong>Data Hiding </strong> is also used in Encapsulation.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: (
      <>
        <em> 5{")"} Inheritance: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              Inheritance is concept by which objects of one class can acquire
              the properties of objects of another class.
            </li>
            <li>The base class features are inherited by the derived class.</li>
            <li>
              Inheritance supports the concept of hierarchical classification.
              for ex. Robin is a part of flying bird which is part of class
              bird. The principal behind this type of classification is that
              each derived class shares some common characteristic is with class
              from which it is derived.
            </li>
            <li>
              Inheritance provides an important feature of oop which is{" "}
              <strong>"Reusability"</strong>. This mean that we can add
              additional features to an existing one.
            </li>
            <li>
              The old class is known as base class and new class is known as
              derived class.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: (
      <>
        <em> 6{")"} Polymorphism: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              Polymorphism is Greek word, means "multiple forms". it is an
              important concept of object oriented programming.
            </li>
            <li>
              Polymorphism plays an important role in allowing objects having
              different internal structures to share the same external
              interface.
            </li>
            <li>
              Ex. <br /> &nbsp;&nbsp;If shape is class having method draw, then
              multiple objects like circle,box,triangle object have the same
              method draw.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: (
      <>
        <em> 7{")"} Dynamic Binding: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              Dynamic binding is associated with polymorphism and inheritance.
            </li>
            <li>
              Dynamic binding means that the code associated with the given
              procedure call is not known until runtime.
            </li>
            <li>
              Ex.
              <br /> &nbsp;&nbsp; Consider a function called draw() which is
              used to draw either a circle,triangle,or box. by inheritance every
              object will have all method.
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: (
      <>
        <em> 8{")"} Message Passing: - </em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              {" "}
              The Process og programming is OOP language includes following
              steps :{" "}
            </li>
            <li> Creating Class that define variables & method.</li>
            <li> Creating Objects from class function.</li>
            <li> Establishing communication between object.</li>
            <li> Objects communicate with one another through messages.</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 9,
    title: (
      <>
        <em> # Application of OOP :</em>
      </>
    ),
    descp: (
      <>
        <p>
          <ul>
            <li>
              {" "}
              The most popular application of oop in the area of user interface
              design is windows. There are hundreds of windowing systems
              developed using oop techniques.
            </li>
            <li> The different area of applications includes:</li>
            <li> Real time systems</li>
            <li> Object oriented databases.</li>
            <li> Artificial intelligence and expert systems.</li>
            <li> Modeling</li>
            <li> Office automation system</li>
            <li> CAD/CAM systems, etc.</li>
          </ul>
        </p>
      </>
    ),
  },
];
export default subTopics1;
