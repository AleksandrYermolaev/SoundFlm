import { quizNumber } from '../quiz';
import { moviesData, soundTraks } from './movies-data';
export const playButton = document.querySelector('.audio__play-icon');
export const muteButton = document.querySelector('#question-mute-button');
export const volume = document.querySelector('#question__volume-progress');
let isPlay = false;
let isMuted = false;
export const audio = document.querySelector('#question-audio');
export const audioProgressBar = document.querySelector(
  '#question__audio-progress'
);

export const loadAudio = (roundNumber, quizNumber) => {
  const audioSrc = soundTraks[roundNumber][quizNumber];
  audio.src = audioSrc;
  audio.volume = 0.25;
};

const playAudio = () => {
  audio.play();
  isPlay = true;
  playButton.classList.remove('fa-play-circle');
  playButton.classList.add('fa-pause-circle');
};

export const pauseAudio = () => {
  audio.pause();
  isPlay = false;
  playButton.classList.remove('fa-pause-circle');
  playButton.classList.add('fa-play-circle');
};

export const playPause = () => {
  if (isPlay) {
    pauseAudio();
  } else {
    playAudio();
  }
};

const updateAudioProgress = () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  audioProgressBar.value = progressPercent || 0;
};

const updateAudioTime = () => {
  if (isPlay) {
    const alreadyPlaySecond = String(
      Math.round(audio.currentTime % 60)
    ).padStart(2, '0');
    const alreadyPlayMinutes = String(
      Math.trunc(audio.currentTime / 60)
    ).padStart(2, '0');
    let durationSeconds = String(Math.round(audio.duration % 60)).padStart(
      2,
      '0'
    );
    if (isNaN(durationSeconds)) {
      durationSeconds = '00';
    }
    let durationMinutes = String(Math.trunc(audio.duration / 60)).padStart(
      2,
      '0'
    );
    if (isNaN(durationMinutes)) {
      durationMinutes = '00';
    }
    const timePlayed = document.querySelector('#question__play-time');
    const timeDuration = document.querySelector('#question__remain-time');
    timePlayed.textContent = `${alreadyPlayMinutes}:${alreadyPlaySecond}`;
    timeDuration.textContent = `${durationMinutes}:${durationSeconds}`;
  }
};

export const updateAudio = () => {
  updateAudioProgress();
  updateAudioTime();
};

export function setAudioProgress() {
  const audioProgress = (this.value / 100) * audio.duration;
  audio.currentTime = audioProgress;
}

export function setVolume() {
  const volumePercent = this.value / 100;
  audio.volume = volumePercent;
}

export const muteAudio = () => {
  const muteIcon = document.querySelector('#question-mute-icon');
  if (isMuted) {
    audio.muted = false;
    muteIcon.classList.remove('fa-volume-off');
    muteIcon.classList.add('fa-volume-up');
    isMuted = false;
  } else {
    audio.muted = true;
    muteIcon.classList.remove('fa-volume-up');
    muteIcon.classList.add('fa-volume-off');
    isMuted = true;
  }
};

export const endPlay = () => {
  playButton.classList.remove('fa-pause-circle');
  playButton.classList.add('fa-play-circle');
  isPlay = false;
};
