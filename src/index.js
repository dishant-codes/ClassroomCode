import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Subjects from "./MyComponent/Subjects/Subjects";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <a href="#" id="back-to-top" title="Back to top">
      &uarr;
    </a>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
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
