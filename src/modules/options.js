import { roundNumber } from '../quiz';
import { moviesData, soundTraks } from './movies-data';
import { quizNumber } from './question';
export const options = document.querySelectorAll('.options__item');
let isGuess = false;

export const showInfo = (event) => {
  options.forEach((option, index, options) => {
    if (event.target === options[index]) {
      createDescriptonBlock(index);
      checkIsTrue(event, index);
    }
  });
};

const createDescriptonBlock = (target) => {
  const pasteHtml = `
        <div class="description__poster">
          <img
            src=""
            alt="movie poster"
            class="description__poster-image"
          />
        </div>
        <div class="description__name"></div>
        <div class="description__name-english"></div>
        <div class="description__audio audio">
          <audio src="" id="description-audio"></audio>
          <div class="audio__play">
            <i class="audio__play-icon fa fa-play-circle"></i>
            <div class="audio__play-time" id="description__play-time">00:00</div>
            <div class="audio__play-remain" id="description__remain-time">00:00</div>
            <input type="range" class="audio__play-progress" id="description__audio-progress" value="0" />
          </div>
          <div class="audio__volume">
            <button class="audio__volume-mute" id="description-mute-button">
              <i class="fa fa-volume-up" aria-hidden="true" id="description-mute-icon"></i>
            </button>
            <input type="range" class="audio__volume-progress" id="description__volume-progress" value="25" />
          </div>
        </div>
        <div class="description__text"></div>`;
  const block = document.querySelector('.description');
  block.innerHTML = pasteHtml;
  const blockPoster = block.querySelector('.description__poster-image');
  const descriptionName = block.querySelector('.description__name');
  const descriptionNameEng = block.querySelector('.description__name-english');
  const audio = block.querySelector('#description-audio');
  const timePlayed = block.querySelector('#description__play-time');
  const timeDuration = block.querySelector('#description__remain-time');
  const audioProgress = block.querySelector('#description__audio-progress');
  const muteButton = block.querySelector('#description-mute-button');
  const muteIcon = block.querySelector('#description-mute-icon');
  const volume = block.querySelector('#description__volume-progress');
  const descriptionText = block.querySelector('.description__text');

  const path = moviesData[roundNumber][target];
  blockPoster.src = path.image;
  descriptionName.textContent = path.name;
  descriptionNameEng.textContent = path.species;
  descriptionText.textContent = path.description;
};

const checkIsTrue = (event, index) => {
  if (!isGuess) {
    if (quizNumber === index) {
      event.target.classList.add('correct');
      isGuess = true;
    } else {
      event.target.classList.add('wrong');
      const audi = new Audio();
      audi.src = soundTraks[0][0];
      audi.play();
    }
  }
};
