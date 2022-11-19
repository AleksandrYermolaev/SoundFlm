import './index.html';
import './index.scss';
import { rules, closeIcon, showModal, closeModal } from './modules/modal-rules';
rules.addEventListener('click', showModal);
closeIcon.addEventListener('click', closeModal);
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});

console.log(`
Самооценка:
1. Вёрстка, дизайн, UI всех трёх страниц приложения +60.
2. Аудиоплеер +30.
3. Верхняя панель страницы викторины +20.
4. Блок с вопросом +20.
5. Блок с вариантами ответов (названия фильмов) +60.
6. Блок с описанием фильма: +30.
7. Кнопка перехода к следующему вопросу +30.
8. Extra scope 0.
Итого: 250 баллов.
`);
