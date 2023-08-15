const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__menu-btn');

const items = document.querySelectorAll('.item-select');
const itemBtns = document.querySelectorAll('.item-select__link');

btn.addEventListener('click', () => {
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
