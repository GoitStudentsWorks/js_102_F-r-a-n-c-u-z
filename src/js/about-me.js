const accordions = document.querySelectorAll('.accordion');
accordions.forEach(accordion => {
  new Accordion(accordion);
});

document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.about-con-list-iteam');

  function toggleAccordion() {
    this.classList.toggle('active');
    const content = this.querySelector('.about-con-list-iteam-id');
    content.style.display === 'block'
      ? (content.style.display = 'none')
      : (content.style.display = 'block');

    const arrow = this.querySelector('.arrow-up');
    arrow.classList.toggle('arrow-down');
  }

  accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });

  for (let i = 1; i < accordionItems.length; i++) {
    const content = accordionItems[i].querySelector('.about-con-list-iteam-id');
    content.style.display = 'none';
  }
});

const arrow = document.querySelector('.about-skills-list-svg');
const skills = document.querySelectorAll('.about-skills-list-div');

let currentIndex = 0;

skills[currentIndex].style.backgroundColor = '#ed3b44';

// arrow.addEventListener('click', () => {
//   skills[currentIndex].style.backgroundColor = '';
//   currentIndex = (currentIndex + 1) % skills.length;
//   skills[currentIndex].style.backgroundColor = '#ed3b44';
// });

// // core version + navigation, pagination modules:
// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation],
//   direction: 'horizontal',
//   loop: true,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
