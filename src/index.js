import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";
import Preloader from "./MyComponent/Preloader";
const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
    <a href="#" id="back-to-top" title="Back to top">
      &uarr;
    </a>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

if ($("#back-to-top").length) {
  var scrollTrigger = 100, // px
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#back-to-top").addClass("show");
        $("#nav_top").addClass("bottom-shadow");
      } else {
        $("#back-to-top").removeClass("show");
        $("#nav_top").removeClass("bottom-shadow");
      }
    };
  backToTop();
  $(window).on("scroll", function () {
    backToTop();
    // console.log(s);
  });
  $("#back-to-top").on("click", function (e) {
    e.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      2
    );
  });
}
