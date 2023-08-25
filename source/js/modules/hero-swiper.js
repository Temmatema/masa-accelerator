import Swiper from '../vendor/swiper.js';

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.hero', {
  speed: 300,
  direction: 'horizontal',
  initialSlide: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

const heroLinks = document.querySelectorAll('.hero__link');

heroLinks.forEach((link, index) => {
  link.addEventListener('focus', () => {
    swiper.slideTo(index);
  });
});
