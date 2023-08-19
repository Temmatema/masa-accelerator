import Swiper from '../vendor/swiper.js';
import {news} from '../mock/mock.js';

const newCard = document.querySelector('#news').content.querySelector('.new-card');
const swiperWrap = document.querySelector('.news__swiper-wrapper');
const filterButtons = document.querySelectorAll('.news__btn');
createNews(news);

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper('.news__swiper', {
  speed: 300,
  direction: 'horizontal',
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      pagination: {
        dynamicMainBullets: 4,
      },
    },
    1281: {
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  },
  navigation: {
    nextEl: '.news__next-btn',
    prevEl: '.news__prev-btn',
  },
  pagination: {
    el: '.news__pagination',
    dynamicBullets: true,
    dynamicMainBullets: 3,
    clickable: true,
    renderBullet: (index, className) => {
      return '<button class="' + className + '">' + (index + 1) + '</button>';
    },
  },
});


function createNews(array) {
  const windowWidth = window.innerWidth;
  swiperWrap.innerHTML = '';

  if (windowWidth > 1280) {
    array.forEach((el, index) => {
      const newCardClone = createNew(el);

      if (index % 3 === 0) {
        newCardClone.classList.add('slide-active');
      }

      swiperWrap.appendChild(newCardClone);
    });

    while (swiperWrap.childElementCount % 3 !== 0) {
      const element = document.createElement('div');
      element.classList.add('new-card');
      element.classList.add('swiper-slide');
      swiperWrap.appendChild(element);
    }
  } else if (windowWidth <= 1280 && windowWidth >= 768) {
    array = chunkArray(array, 4);

    array.forEach((item) => {
      const element = document.createElement('div');
      element.classList.add('slide-grid');
      element.classList.add('swiper-slide');
      for (let i = 0; i < item.length; i++) {
        const newCardClone = createNew(item[i]);
        element.appendChild(newCardClone);
      }
      swiperWrap.appendChild(element);
    });
  } else if (windowWidth <= 767) {
    array = chunkArray(array, 2);

    array.forEach((item) => {
      const element = document.createElement('div');
      element.classList.add('slide-grid');
      element.classList.add('swiper-slide');
      for (let i = 0; i < item.length; i++) {
        const newCardClone = createNew(item[i]);
        element.appendChild(newCardClone);
      }
      swiperWrap.appendChild(element);
    });
  }

  return swiperWrap;
}

filterButtons.forEach((btn) =>
  btn.addEventListener('click', () => {
    filterButtons.forEach((el) => {
      el.classList.remove('active');
    });

    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    if (filter === 'all') {
      createNews(news);
    } else {
      const newNews = news.filter((el) => el.type === filter);
      createNews(newNews);
    }

    swiper.update();
  })
);

function chunkArray(array, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunkedArray.push(array.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

function createNew(el) {
  const newCardClone = newCard.cloneNode(true);
  newCardClone.querySelector('img').src = el.src;
  newCardClone.querySelector('.new-card__row-1 span').textContent = el.date;
  newCardClone.querySelector('.new-card__row-2 h3').textContent = el.title;
  newCardClone.querySelector('.new-card__row-3 p').textContent = el.text;
  newCardClone.classList.add('swiper-slide');
  return newCardClone;
}
