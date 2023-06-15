import { soundTraks } from './movies-data';
let isPlay = false;
let isMuted = false;
export const loadAudio = (audio, roundNumber, quizNumber) => {
  const audioSrc = soundTraks[roundNumber][quizNumber];
  audio.src = audioSrc;
  audio.volume = 0.25;
};

const playAudio = (audio, playButton) => {
  audio.play();
  isPlay = true;
  playButton.classList.remove('fa-play-circle');
  playButton.classList.add('fa-pause-circle');
};

const pauseAudio = (audio, playButton) => {
  audio.pause();
  isPlay = false;
  playButton.classList.remove('fa-pause-circle');
  playButton.classList.add('fa-play-circle');
};

export const playPause = (audio, playButton) => {
  if (isPlay) {
    pauseAudio(audio, playButton);
  } else {
    playAudio(audio, playButton);
  }
};

const updateAudioProgress = (audio, audioProgressBar) => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  audioProgressBar.value = progressPercent || 0;
};

const updateAudioTime = (audio, timePlayed, timeDuration) => {
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
    timePlayed.textContent = `${alreadyPlayMinutes}:${alreadyPlaySecond}`;
    timeDuration.textContent = `${durationMinutes}:${durationSeconds}`;
  }
};

export const updateAudio = (
  audio,
  audioProgressBar,
  timePlayed,
  timeDuration
) => {
  updateAudioProgress(audio, audioProgressBar);
  updateAudioTime(audio, timePlayed, timeDuration);
};

export function setAudioProgress(audio, audioProgressBar) {
  const audioProgress = (audioProgressBar.value / 100) * audio.duration;
  audio.currentTime = audioProgress;
}

export function setVolume(audio, volumeBar) {
  const volumePercent = volumeBar.value / 100;
  audio.volume = volumePercent;
}

export const muteAudio = (audio) => {
  const muteIcon = document.querySelector('#description-mute-icon');
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

export const endPlay = (playButton) => {
  playButton.classList.remove('fa-pause-circle');
  playButton.classList.add('fa-play-circle');
  isPlay = false;
};
