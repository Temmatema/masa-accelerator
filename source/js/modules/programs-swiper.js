import Swiper from '../vendor/swiper.js';

const slides = document.querySelectorAll('.programs__card');
const lineParent = document.querySelector('.programs__line');
const lineChild = document.querySelector('.programs__inner-line');

let screenWidth = window.innerWidth;
let widthCount;
let width; let currentWidth;

if (screenWidth < 768) {
  widthCount = 0;
} else if (screenWidth < 1199) {
  widthCount = 1;
} else {
  widthCount = 2;
}

if (lineParent) {
  width = lineParent.offsetWidth / (slides.length - widthCount);
  currentWidth = width;
  lineChild.style.width = `${currentWidth}px`;
}

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.programs__swiper', {
  speed: 300,
  direction: 'horizontal',
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.programs__btn-next',
    prevEl: '.programs__btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
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
