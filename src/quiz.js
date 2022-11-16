import './quiz.html';
import './quiz.scss';
import { rules, closeIcon, showModal, closeModal } from './modules/modal-rules';
import { changeRound } from './modules/rounds';
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

import { options, showInfo } from './modules/options';

export let roundNumber = 0;

rules.addEventListener('click', showModal);
closeIcon.addEventListener('click', closeModal);
window.addEventListener('load', () => {
  document.body.classList.remove('preload');
});
loadAudio(roundNumber);
playButton.addEventListener('click', playPause);

audio.addEventListener('timeupdate', updateAudio);
audio.addEventListener('ended', endPlay);
audioProgressBar.addEventListener('change', setAudioProgress);
muteButton.addEventListener('click', muteAudio);
volume.addEventListener('change', setVolume);
options.forEach((option) => option.addEventListener('click', showInfo));
// import logoFooter from './img/banana-bamboo_icon.png';

// const img = new Image();
// img.src = logoFooter;
