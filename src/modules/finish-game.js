export const showFinishMessage = (score) => {
  const finishMessage = document.querySelector('.finish-game');
  const quiz = document.querySelector('.main');
  const anotherGame = document.querySelector('.finish-game__another-play');
  const restartButton = document.createElement('button');
  restartButton.className = 'finish-game__another-play-restart';
  restartButton.textContent = 'Сыграть еще раз!';
  restartButton.addEventListener('click', () => {
    window.location.reload();
  });

  const currentScore = document.querySelector('.finish-game__current-score');
  currentScore.textContent = score;
  if (score === '30') {
    finishMessage.classList.remove('hide');
    quiz.classList.add('hide');
  } else {
    anotherGame.append(restartButton);
    finishMessage.classList.remove('hide');
    quiz.classList.add('hide');
  }
};
