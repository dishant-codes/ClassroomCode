import React from "react";
import $ from "jquery";

function forAndroid() {
  $("#forAndcard-1").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subAndcard-1").offset().top - 60,
      },
      2
    );
  });
  $("#forAndcard-2").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subAndcard-2").offset().top - 60,
      },
      2
    );
  });
  $("#forAndcard-3").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subAndcard-3").offset().top - 60,
      },
      2
    );
  });
  $("#forAndcard-4").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: $("#subAndcard-4").offset().top - 60,
      },
      2
    );
  });
}

export default forAndroid;
