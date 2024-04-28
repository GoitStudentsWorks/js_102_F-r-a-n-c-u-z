'use strict';

const menuBox = document.querySelector('.menu');
const menu = document.querySelector('.menu-title');
const menuList = document.querySelector('.menu-list');
const openBtn = document.querySelector('.open-mobile-menu');
const mobMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.header-nav');
const menuListItem = document.querySelectorAll('.menu-list-item');

mobMenu.addEventListener('click', closeBtnClick);
nav.addEventListener('click', onNavElementsClick);

function closeBtnClick(event) {
  if (event.target.nodeName === 'BUTTON') {
    mobMenu.classList.remove('is-open');
  }
}

function onNavElementsClick(event) {
  if (event.target === menu || event.target.parentNode === menu) {
    menuList.classList.toggle('visually-hidden-menu');
  } else if (event.target === openBtn || event.target.parentNode === openBtn) {
    mobMenu.classList.add('is-open');
  } else if (menuList.contains(event.target)) {
    menuList.classList.toggle('visually-hidden-menu');
    mobMenu.classList.remove('is-open');
  }
}
