
const openMenuBtn = document.querySelector(".open-mobile-menu");
const closeMenuBtn = document.querySelector(".close-menu");
const menu = document.querySelector(".mobile-menu");

const menuItems = document.querySelectorAll(".mobile-menu-item");
const menuOrderBtn = document.querySelector(".order-project-mobm");

openMenuBtn.addEventListener("click", onOpenMobileMenu);
closeMenuBtn.addEventListener("click", onCloseMobileMenu);
menuOrderBtn.addEventListener("click", onCloseMobileMenu);

menuItems.forEach(el => el.addEventListener("click", onCloseMobileMenu));


function onOpenMobileMenu() {
   
    menu.classList.add("is-open");
 
}

function onCloseMobileMenu() {
    console.log(menuItems);
    menu.classList.remove("is-open");
 
}
