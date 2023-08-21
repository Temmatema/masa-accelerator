const modalBlock = document.querySelector('.field-cities');
const formBlock = document.querySelector('.form__field-cities');
const modalInput = document.querySelector('.input-cities');
const formInput = document.querySelector('.form__input-cities');
const modalSelect = document.querySelectorAll('.field-cities-select button');
const formSelect = document.querySelectorAll('.form__field-cities-select button');

modalInput.addEventListener('click', () => {
  modalBlock.classList.toggle('cities-active');
});

formInput.addEventListener('click', () => {
  formBlock.classList.toggle('cities-active');
});

modalSelect.forEach((el) =>
  el.addEventListener('click', () => selectBtns(el, modalBlock, modalInput))
);

formSelect.forEach((el) =>
  el.addEventListener('click', () => selectBtns(el, formBlock, formInput))
);

function selectBtns(el, block, input) {
  input.value = el.textContent;
  block.classList.remove('cities-active');

  if (block.classList.contains('is-invalid')) {
    block.classList.remove('is-invalid');
  }
}
