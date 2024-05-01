// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// Получаем ссылки на кнопки навигации
const nextButton = document.querySelector('.swiper-button-next-proj-btn');
const prevButton = document.querySelector('.swiper-button-prev-proj-btn');

// init Swiper:
const swiper = new Swiper('.swiper-proj', {
  // configure Swiper to use modules
  modules: [Navigation],
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-proj-btn',
    prevEl: '.swiper-button-prev-proj-btn',
  },
  on: {
    slideChangeTransitionEnd: function () {
        const isBeginning = this.isBeginning;
        const isEnd = this.isEnd;

        // Если текущий слайд - первый, отключаем правую кнопку
        if (isBeginning) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        // Если текущий слайд - последний, отключаем левую кнопку
        if (isEnd) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
}
});

prevButton.disabled = true;

