export const rules = document.querySelector('.header__pages-rules');
export const closeIcon = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const body = document.body;

export function showModal() {
  modal.classList.toggle('hide');
  body.style.overflow = 'hidden';
  body.style.pointerEvents = 'none';
  modal.style.pointerEvents = 'all';
}

export function closeModal() {
  modal.classList.toggle('hide');
  body.style.overflow = 'visible';
  body.style.pointerEvents = 'all';

  modal.style.pointerEvents = 'none';
}
