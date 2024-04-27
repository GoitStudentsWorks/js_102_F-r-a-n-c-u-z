
const openMenuBtn = document.querySelector(".open-mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menu = document.querySelector(".mobile-menu");


openMenuBtn.addEventListener("click", onOpenMobileMenu);
closeMenuBtn.addEventListener("click", onCloseMobileMenu);

function onOpenMobileMenu() {
   
    menu.classList.add("is-open");
 
}

function onCloseMobileMenu() {
   
    menu.classList.remove("is-open");
 
}