// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';


const lButton = document.querySelector('.swiper-button-next-rev-btn');
const rButton = document.querySelector('.swiper-button-prev-rev-btn');
const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';

fetch(BASE_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(post => console.log(post))
  .catch(error => console.log(error));

const swiper = new Swiper('.swiper-reviews', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  centeredSlides: false,
  slidesPerView: 4,
  navigation: {
    nextEl: '.swiper-button-next-rev-btn',
    prevEl: '.swiper-button-prev-rev-btn',
  },
  on: {
    resize: function () {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 768) {
        swiper.params.slidesPerView = 1;
      } else if (windowWidth <= 1440) {
        swiper.params.slidesPerView = 2;
      } else {
        swiper.params.slidesPerView = 4;
      }
      swiper.update();
    },
    slideChangeTransitionEnd: function () {
      const beginning = swiper.isBeginning;
      const end = swiper.isEnd;
      if (beginning) {
        rButton.disabled = true;
      } else {
        rButton.disabled = false;
      }
      if (end) {
        lButton.disabled = true;
      } else {
        lButton.disabled = false;
      }
    },
  },
});

rButton.disabled = true;

// 'use strict';

// document.addEventListener('DOMContentLoaded', function () {
//   const Swiper = new Swiper('.cards-list', {
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//     direction: 'horizontal',
//     slidesPerView: 1,
//     spaceBetween: 16,
//     navigation: {
//       nextEl: '.rewiews-button-next',
//       prevEl: '.rewiews-button-prev',
//     },
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//         spaceBetween: 16,
//       },
//       1440: {
//         slidesPerView: 4,
//         spaceBetween: 16,
//       },
//     },
//   });

//   document
//     .querySelector('.rewiews-button-prev')
//     .addEventListener('click', function () {
//       mySwiper.slidePrev();
//     });

//   document
//     .querySelector('.rewiews-button-next')
//     .addEventListener('click', function () {
//       mySwiper.slideNext();
//     });
// });
