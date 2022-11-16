const score = document.querySelector('.rounds__score-count');

export const changeRound = (roundNumber) => {
  const rounds = document.querySelectorAll('.rounds__item');
  for (let i = 0; i < rounds.length; i++) {
    if (rounds[i].classList.contains('current')) {
      rounds[i].classList.remove('current');
      rounds[i + 1].classList.add('current');
      roundNumber++;
      return;
    } else {
      continue;
    }
  }
};
