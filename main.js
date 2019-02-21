'use strict'

//on click the nav is displayed
let menu = ('#js-menu')
let toggle = '#js-navbar-toggle'

function toggleMenu() {

    $(toggle).click(function (event) {
        $(menu).toggleClass('active');
    });
}

//close the navbar when link is clicked
function closeNav() {
    $(menu).on('click', 'li', function () {
        $(menu).removeClass('active');

    });

}

function renderPage() {

    toggleMenu();
    closeNav();

}

$(renderPage)
