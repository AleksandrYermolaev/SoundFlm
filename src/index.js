import './index.html';
import './index.scss';
import { rules, closeIcon, showModal, closeModal } from './modules/modal-rules';
rules.addEventListener('click', showModal);
closeIcon.addEventListener('click', closeModal);
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
