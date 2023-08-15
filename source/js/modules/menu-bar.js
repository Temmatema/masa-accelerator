const menu = document.querySelector('.btn-content');
const btn = document.querySelector('.header__menu-btn');

btn.addEventListener('click', () => {
  menu.classList.toggle('btn-content--active');
});
