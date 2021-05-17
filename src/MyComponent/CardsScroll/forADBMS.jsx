import React from "react";
import $ from "jquery";

function forADBMS() {
  $("#forDbcard-1").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subDbcard-1").offset().top - 60,
      },
      2
    );
  });
  $("#forDbcard-2").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subDbcard-2").offset().top - 60,
      },
      2
    );
  });
  $("#forDbcard-3").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subDbcard-3").offset().top - 60,
      },
      2
    );
  });
  $("#forDbcard-4").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subDbcard-4").offset().top - 60,
      },
      2
    );
  });
}

export default forADBMS;
