const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__menu-btn');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

const items = document.querySelectorAll('.item-select');
const itemBtns = document.querySelectorAll('.item-select__link');
let menuActive = false;

btn.onclick = btnHandler;

function btnHandler() {
  main.classList.toggle('menu-active');

  if (menuActive) {
    menu.classList.remove('menu-true');
    menu.classList.add('menu-false');
    footer.style.display = 'block';
    items.forEach((el) => el.classList.remove('item-select-active'));
  } else {
    menu.classList.remove('menu-false');
    menu.classList.add('menu-true');
    footer.style.display = 'none';
  }

  menuActive = !menuActive;
}

items.forEach((el, index) => {
  itemBtns[index].addEventListener('click', (e) => {
    e.preventDefault();
    el.classList.toggle('item-select-active');
  });
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== btn) {
    if (menu.classList.contains('menu-true')) {
      menu.classList.remove('menu-true');
      menu.classList.add('menu-false');

      main.classList.remove('menu-active');
    }
  }
});
