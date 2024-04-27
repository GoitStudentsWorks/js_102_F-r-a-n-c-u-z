
const menu = document.querySelector(".menu-title");
const menuList = document.querySelector(".menu-list")
menu.addEventListener("click", onMenuClick);

function onMenuClick() {
    if (menuList.classList.contains("visually-hidden-menu")) {
        
        menuList.classList.remove("visually-hidden-menu");
        menuList.classList.add("visually-visible-menu");

    } else {
         menuList.classList.remove("visually-visible-menu");
        menuList.classList.add("visually-hidden-menu");
    }
    
 
}