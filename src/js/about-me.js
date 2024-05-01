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
    arrow.style.transition = `transform 250ms cubic-bezier(0.4, 0, 0.2, 1)`;
  }

  accordionItems.forEach(item => {
    item.addEventListener('click', toggleAccordion);
  });

  for (let i = 1; i < accordionItems.length; i++) {
    const content = accordionItems[i].querySelector('.about-con-list-iteam-id');
    content.style.display = 'none';
  }
});

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// Ініціалізуємо Swiper для підсвічування
const swiper = new Swiper('.swiper-container', {
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function () {
      // Отримуємо всі слайди
      const slides = document.querySelectorAll('.about-skills-list-div');
      // Змінюємо колір фону на початковий для всіх слайдів
      slides.forEach(slide => {
        slide.style.backgroundColor = '';
      });
      // Отримуємо поточний активний слайд та підсвічуємо його червоним
      const activeSlide = slides[this.activeIndex];
      activeSlide.style.backgroundColor = '#ed3b44';
    },
  },
});
