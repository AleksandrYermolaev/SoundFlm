export const nextRoundButton = document.querySelector('.next-round');

export const changeRound = () => {
  const rounds = document.querySelectorAll('.rounds__item');
  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].classList.contains('current')) {
      rounds[i].classList.remove('current');
      rounds[i + 1].classList.add('current');
      return;
    } else {
      continue;
    }
  }
};
