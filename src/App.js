import React, { useEffect, useState } from "react";
import "./App.css";
import Spm from "./MyComponent/subComp/SPM/Spm";
import Aplr from "./MyComponent/subComp/Aplr/Aplr";
import Ittool from "./MyComponent/subComp/ITTOOL/Ittool";
import Android from "./MyComponent/subComp/Android/Android";
import Adbms from "./MyComponent/subComp/ADBMS/Adbms";
import CoreJava from "./MyComponent/subComp/CoreJava/Java";
import ScrollToTop from "./MyComponent/ScrollToTop";
import Tutorial from "./MyComponent/Tutorial/Tutorial";
import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./MyComponent/Navbar/Navbar";
import Subjects from "./MyComponent/Subjects/Subjects";
import FeedBack from "./MyComponent/FeedBack";

function App() {
  const [NavTitle, setNavTitle] = useState("Classroom");
  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "POP") {
        setNavTitle("Classroom");
      }
    });
  }, [NavTitle]);

  return (
    <>
      <div className="main-div">
        <Navbar head={NavTitle} setNavTitle={setNavTitle} />
        <Switch>
          <Route exact path="/">
            <Subjects setNavTitle={setNavTitle} />
          </Route>
          <Route exact path="/Classroom">
            <Subjects setNavTitle={setNavTitle} />
          </Route>
          <Route exact path="/Classroom/spm">
            <ScrollToTop />
            <Spm />
          </Route>
          <Route exact path="/Classroom/aplr">
            <ScrollToTop />
            <Aplr />
          </Route>
          <Route exact path="/Classroom/ittool">
            <ScrollToTop />
            <Ittool />
          </Route>
          <Route exact path="/Classroom/aand">
            <ScrollToTop />
            <Android />
          </Route>
          <Route exact path="/Classroom/adbms">
            <ScrollToTop />
            <Adbms />
          </Route>
          <Route exact path="/Classroom/corejava">
            <ScrollToTop />
            <CoreJava />
          </Route>
          <Route exact path="/Classroom/tutorial">
            <ScrollToTop />
            <Tutorial />
          </Route>
          <Route exact path="/Classroom/feedback">
            <ScrollToTop />
            <FeedBack />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
