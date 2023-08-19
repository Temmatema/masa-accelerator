import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './modules/menu-bar.js';
import './modules/hero-swiper.js';
import './modules/modal-policy.js';
import './modules/select-modal.js';
import './modules/programs-swiper.js';
import './modules/news-swiper.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
