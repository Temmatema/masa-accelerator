import Swiper from '../vendor/swiper.js';
import {news} from '../mock/mock.js';

let newCard = document.querySelector('#news');
if (newCard) {
  newCard = newCard.content.querySelector('.new-card');
}
const swiperWrap = document.querySelector('.news__swiper-wrapper');
const filterButtons = document.querySelectorAll('.news__btn');
const filterBlock = document.querySelector('.news__btns-wrap');

if (swiperWrap && newCard) {
  createNews(news);
}

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
    1200: {
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

  if (windowWidth > 1199) {
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

    if (swiperWrap.childElementCount <= 3) {
      filterBlock.style.display = 'none';
    } else {
      filterBlock.style.display = 'flex';
    }
  } else if (windowWidth <= 1199 && windowWidth >= 768) {
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

    if (swiperWrap.childElementCount <= 1) {
      filterBlock.style.display = 'none';
    } else {
      filterBlock.style.display = 'flex';
    }
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

    if (swiperWrap.childElementCount <= 1) {
      filterBlock.style.display = 'none';
    } else {
      filterBlock.style.display = 'flex';
    }
  }

  return swiperWrap;
}

if (filterButtons.length && newCard) {
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
}

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
