"use strict";

let menu = "#js-menu";
let toggle = "#js-navbar-toggle";

function toggleMenu() {
  $(toggle).click(function() {
    $(menu).toggleClass("active");
  });
}

function closeNav() {
  $(menu).on("click", "li", function() {
    $(menu).removeClass("active");
  });
}

function renderPage() {
  toggleMenu();
  closeNav();
}

$(renderPage);
