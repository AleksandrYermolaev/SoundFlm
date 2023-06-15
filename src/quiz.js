import './quiz.html';
import './quiz.scss';
import { rules, closeIcon, showModal, closeModal } from './modules/modal-rules';
import { changeRound, nextRoundButton } from './modules/rounds';
import {
  playButton,
  loadAudio,
  playPause,
  audio,
  updateAudio,
  setAudioProgress,
  audioProgressBar,
  muteButton,
  volume,
  setVolume,
  muteAudio,
  endPlay,
} from './modules/question';
import unknownMovie from './img/unknown-movie.png';
import { options, showInfo } from './modules/options';
import { moviesData } from './modules/movies-data';
import { showFinishMessage } from './modules/finish-game';
export let quizNumber = Math.round(5 * Math.random());
export let roundNumber = 0;
const guessedName = document.querySelector('.question__name');
let isGuess = false;

rules.addEventListener('click', showModal);
closeIcon.addEventListener('click', closeModal);
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
loadAudio(roundNumber, quizNumber);
playButton.addEventListener('click', playPause);

audio.addEventListener('timeupdate', updateAudio);
audio.addEventListener('ended', endPlay);
audioProgressBar.addEventListener('change', setAudioProgress);
muteButton.addEventListener('click', muteAudio);
volume.addEventListener('change', setVolume);

options.forEach((option) =>
  option.addEventListener('click', (event) => {
    isGuess = guessedName.textContent === '*****' ? false : true;
    showInfo(event, isGuess);
  })
);

const resetQuestionBlock = () => {
  const unknownPoster = document.querySelector('.question__poster-image');
  const unknownName = document.querySelector('.question__name');
  const timePlayed = document.querySelector('#question__play-time');
  const timeDuration = document.querySelector('#question__remain-time');
  unknownPoster.src = unknownMovie;
  unknownName.textContent = '*****';
  timePlayed.textContent = '00:00';
  timeDuration.textContent = '00:00';
};

const lockNextButton = () => {
  const nextRoundButton = document.querySelector('.next-round');
  nextRoundButton.classList.remove('go-next');
};

const resetOptionsData = (roundNumber) => {
  const options = document.querySelectorAll('.options__item');
  options.forEach((option, index) => {
    option.classList.remove('wrong');
    option.classList.remove('correct');
    option.textContent = moviesData[roundNumber][index].name;
  });
  isGuess = false;
};

const resetDescription = () => {
  const descriptionBlock = document.querySelector('.description');
  const pasteHtml = `
        <span class="info"
          >Прослушайте плеер и выберите соответствующий вариант из списка.
        </span>`;
  descriptionBlock.innerHTML = pasteHtml;
};

const loadNextRoundData = () => {
  roundNumber++;
  if (roundNumber === 6) {
    const totalScore = document.querySelector(
      '.rounds__score-count'
    ).textContent;
    showFinishMessage(totalScore);
  } else {
    changeRound();
    quizNumber = Math.round(5 * Math.random());
    loadAudio(roundNumber, quizNumber);
    resetQuestionBlock();
    lockNextButton();
    resetOptionsData(roundNumber);
    resetDescription();
  }
};

nextRoundButton.addEventListener('click', loadNextRoundData);
