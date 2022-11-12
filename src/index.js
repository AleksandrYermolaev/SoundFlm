import './index.html';
import './index.scss';

const rules = document.querySelector('.header__pages-rules');
const modal = document.querySelector('.modal');
const closeIcon = document.querySelector('.modal__close');
const body = document.body;

rules.addEventListener('click', showModal);
closeIcon.addEventListener('click', closeModal);

function showModal() {
  modal.classList.toggle('hide');
  body.style.overflow = 'hidden';
  body.style.pointerEvents = 'none';
  modal.style.pointerEvents = 'all';
}

function closeModal() {
  modal.classList.toggle('hide');
  body.style.overflow = 'visible';
  body.style.pointerEvents = 'all';
}
// import logoFooter from './img/banana-bamboo_icon.png';
// import { mult, sum } from './modules/calc';
// const img = new Image();
// img.src = logoFooter;
