const menu = document.querySelector('.header__menu');
const btn = document.querySelector('.header__menu-btn');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const wrapper = document.querySelector('.wrapper');

const items = document.querySelectorAll('.item-select');
const itemBtns = document.querySelectorAll('.item-select__link');

if (btn) {
  btn.onclick = btnHandler;
}

function btnHandler() {
  main.classList.toggle('menu-active');
  btn.classList.toggle('open');

  if (menu.classList.contains('menu-true')) {
    menu.classList.remove('menu-true');
    menu.classList.add('menu-false');
    footer.style.display = 'block';
    wrapper.style.overflow = 'auto';
    items.forEach((el) => el.classList.remove('item-select-active'));
  } else {
    menu.classList.remove('menu-false');
    menu.classList.add('menu-true');
    footer.style.display = 'none';
    wrapper.style.overflow = 'hidden';
  }
}

if (items.length) {
  items.forEach((el, index) => {
    itemBtns[index].addEventListener('click', (e) => {
      e.preventDefault();
      el.classList.toggle('item-select-active');
    });
  });
}

document.addEventListener('click', (e) => {
  if (menu && !menu.contains(e.target) && e.target !== btn) {
    if (menu.classList.contains('menu-true')) {
      menu.classList.remove('menu-true');
      menu.classList.add('menu-false');

      main.classList.remove('menu-active');
      btn.classList.remove('open');
    }
  }
});
