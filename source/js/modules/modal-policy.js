const block = document.querySelector('.modal__policy');
const checkBtn = document.querySelector('.modal__policy span');
const checkbox = document.querySelector('.modal__policy input');

checkBtn.addEventListener('click', () => {
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    block.classList.remove('is-invalid');
  }
});
