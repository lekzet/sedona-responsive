/*    mobile-menu    */

var mainNavList = document.querySelector(".main-nav__list");
var mainNavToggle = document.querySelector(".main-nav__toggle");

mainNavToggle.addEventListener("click", function(event) {
    event.preventDefault();
    mainNavToggle.classList.toggle("main-nav__toggle--close");
    mainNavList.classList.toggle("main-nav__list--open");
});