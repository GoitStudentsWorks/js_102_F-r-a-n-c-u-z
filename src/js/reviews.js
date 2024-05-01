// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';


const lButton = document.querySelector('.swiper-button-next-rev-btn');
const rButton = document.querySelector('.swiper-button-prev-rev-btn');
const BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
const listEl = document.querySelector('.cards-list')

fetch(BASE_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(posts => {
    listEl.innerHTML = posts.map(post => `
    <li class="swiper-slide swiper-slide-rev cards-item-natalia">
            <img
              src=${post.avatar_url}
              alt="student"
              width="48"
              height="48"
              loading="lazy"
            />
          <div class="info">
            <h3 class="name">${post.author}</h3>
            <p class="text">
              ${post.review}
            </p>
          </div>
        </li>
    `).join('');
  })
  .catch(error => console.log(error));

const swiper = new Swiper('.swiper-reviews', {
  modules: [Navigation],
  direction: 'horizontal',
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
        this.params.slidesPerView = 1;
      } else if (windowWidth <= 1440) {
        this.params.slidesPerView = 2;
      } else {
        this.params.slidesPerView = 4;
      }
      this.update();
    },
    slideChangeTransitionEnd: function () {
      const beginning = this.isBeginning;
      const end = this.isEnd;
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