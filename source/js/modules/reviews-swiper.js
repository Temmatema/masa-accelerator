import Swiper from '../vendor/swiper.js';

const slides = document.querySelectorAll('.review');
const lineParent = document.querySelector('.reviews__line');
const lineChild = document.querySelector('.reviews__inner-line');

let screenWidth = window.innerWidth;
let widthCount;

if (screenWidth < 1199) {
  widthCount = 0;
} else {
  widthCount = 1;
}

let width = lineParent.offsetWidth / (slides.length - widthCount);
let currentWidth = width;

lineChild.style.width = `${currentWidth}px`;

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.reviews__swiper', {
  speed: 300,
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 29,
  breakpoints: {
    1200: {
      slidesPerView: 'auto',
      spaceBetween: 31,
    },
  },
  navigation: {
    nextEl: '.reviews__btn-next',
    prevEl: '.reviews__btn-prev',
  },
  on: {
    slideChange: () => {
      if (swiper.realIndex > swiper.previousIndex) {
        currentWidth += width;
        lineChild.style.width = `${currentWidth}px`;
      } else {
        currentWidth -= width;
        lineChild.style.width = `${currentWidth}px`;
      }
    },
  },
});
