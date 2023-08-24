const menuWrap = document.querySelector('.header__menu');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.header__menu-btn');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const wrapper = document.querySelector('.wrapper');

const items = document.querySelectorAll('.item-select');
const innerList = document.querySelectorAll('.menu__list');
const itemBtns = document.querySelectorAll('.item-select__link');

if (btn) {
  btn.onclick = btnHandler;
}

function btnHandler() {
  main.classList.toggle('menu-active');
  btn.classList.toggle('open');

  if (menuWrap.classList.contains('menu-true')) {
    menuWrap.classList.remove('menu-true');
    menuWrap.classList.add('menu-false');
    menu.style.display = 'none';
    footer.style.display = 'block';
    wrapper.style.overflow = 'auto';
    items.forEach((el) => el.classList.remove('item-select-active'));
    innerList.forEach((el) => el.classList.remove('active'));
  } else {
    menuWrap.classList.remove('menu-false');
    menuWrap.classList.add('menu-true');
    menu.style.display = 'block';
    footer.style.display = 'none';
    wrapper.style.overflow = 'hidden';
  }
}

if (items.length) {
  items.forEach((el, index) => {
    itemBtns[index].addEventListener('click', (e) => {
      e.preventDefault();
      innerList[index].classList.toggle('active');
      el.classList.toggle('item-select-active');
    });
  });
}

document.addEventListener('click', (e) => {
  if (menuWrap && !menuWrap.contains(e.target) && e.target !== btn) {
    if (menuWrap.classList.contains('menu-true')) {
      menuWrap.classList.remove('menu-true');
      menuWrap.classList.add('menu-false');

      main.classList.remove('menu-active');
      btn.classList.remove('open');

      menu.style.display = 'none';
      items.forEach((el) => el.classList.remove('item-select-active'));
      innerList.forEach((el) => el.classList.remove('active'));
    }
  }
});
