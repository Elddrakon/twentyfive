let myButton = document.querySelector(".menu-button");
let fadelayer = document.querySelector(".fade-layer");


myButton.addEventListener("click", showMenu);
fadelayer.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    fadelayer.classList.toggle("visible");



}

