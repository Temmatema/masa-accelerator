import {Accordions} from '../utils/accordions';

const elements = document.querySelectorAll('.accordion__element');

let accordion = new Accordions();

if (elements) {
  elements.forEach((el) =>
    el.addEventListener('click', () => {
      if (el.classList.contains('is-active')) {
        accordion.closeAccordion(el, true);
      } else {
        accordion.openAccordion(el, true);
      }
    })
  );
}
