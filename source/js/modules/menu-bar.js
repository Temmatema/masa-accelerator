const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__menu-btn');
const main = document.querySelector('main');

const items = document.querySelectorAll('.item-select');
const itemBtns = document.querySelectorAll('.item-select__link');

btn.addEventListener('click', () => {
  main.classList.toggle('menu-active');

  if (menu.classList.contains('menu-true')) {
    menu.classList.remove('menu-true');
    menu.classList.add('menu-false');

    items.forEach((el) => el.classList.remove('item-select-active'));
  } else {
    menu.classList.remove('menu-false');
    menu.classList.add('menu-true');
  }
});

items.forEach((el, index) =>
  itemBtns[index].addEventListener('click', (e) => {
    e.preventDefault();
    el.classList.toggle('item-select-active');
  })
);

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== btn) {
    menu.classList.remove('menu-true');
    menu.classList.add('menu-false');

    main.classList.remove('menu-active');
  }
});
