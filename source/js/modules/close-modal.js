import {Form} from './form-validate/form';

const closeBtn = document.querySelector('.modal__close-btn');
const thisForm = document.querySelector('.component-demo__form form');
const block = document.querySelector('.field-cities');

let form = new Form();

closeBtn.addEventListener('click', () => {
  form.reset(thisForm);

  if (block.classList.contains('cities-active')) {
    block.classList.remove('cities-active');
  }
});
