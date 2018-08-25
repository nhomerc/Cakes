var showHideButton = document.querySelector(".page-header__button");
var mainMenu = document.querySelector(".main-nav__list");
mainMenu.classList.toggle("show");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    mainMenu.classList.toggle("show");
})
