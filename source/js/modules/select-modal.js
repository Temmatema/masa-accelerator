const block = document.querySelector('.field-cities');
const inputCities = document.querySelector('.input-cities');
const selectCities = document.querySelectorAll('.field-cities-select button');

inputCities.addEventListener('click', () => {
  block.classList.toggle('cities-active');
});

selectCities.forEach((el) =>
  el.addEventListener('click', () => {
    inputCities.value = el.textContent;
    block.classList.remove('cities-active');

    if (block.classList.contains('is-invalid')) {
      block.classList.remove('is-invalid');
    }
  })
);
