import React from "react";
import $ from "jquery";

function forAPLR() {
  $("#forApcard-1").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subApcard-1").offset().top - 60,
      },
      2
    );
  });
  $("#forApcard-2").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subApcard-2").offset().top - 60,
      },
      2
    );
  });
  $("#forApcard-3").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subApcard-3").offset().top - 60,
      },
      2
    );
  });
  $("#forApcard-4").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subApcard-4").offset().top - 60,
      },
      2
    );
  });
}

export default forAPLR;
