const modalBlock = document.querySelector('.modal__policy');
const formBlock = document.querySelector('.form__policy');
const modalCheckBtn = document.querySelector('.modal__policy span');
const formCheckBtn = document.querySelector('.form__policy span');
const modalCheckbox = document.querySelector('.modal__policy input');
const formCheckbox = document.querySelector('.form__policy input');

modalCheckBtn.addEventListener('click', () => handleCheck(modalCheckbox, modalBlock));
formCheckBtn.addEventListener('click', () => handleCheck(formCheckbox, formBlock));

function handleCheck(checkbox, block) {
  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    block.classList.remove('is-invalid');
  }
}
