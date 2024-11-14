//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audioPlay = new Audio('../../../assets/audio/click__play.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');
const music = new Audio('../../../assets/audio/song1.mp3');

const songImage = document.querySelector("#songImage");
const songName = document.querySelector("#songName");

const songs = [
  {
    src: '../../../assets/audio/song1.mp3',
    name: 'Canción 1',
    nameSong: 'Lithium',
    artist: 'Nirvana',
    itsFav: true,
    timeSong: '4:17',
    image: '../../../assets/img/Portada_nirvana.jpg'
  },
  {
    src: '../../../assets/audio/song2.mp3',
    name: 'Canción 2',
    nameSong: 'SORRY 4 THAT MUCH',
    artist: 'FERXXO',
    itsFav: true,
    timeSong: '3:27',
    image: '../../../assets/img/feid.jpg'
  },
  {
    src: '../../../assets/audio/song3.mp3',
    name: 'Canción 3',
    nameSong: 'Soltera',
    artist: 'Blessd',
    itsFav: true,
    timeSong: '2:22',
    image: '../../../assets/img/blessd.jpg'
  }
];

let currentSongIndex = 0;

//ITEMS
const image = document.querySelector("#image");
const nameSong = document.querySelector("#nameSong");
const artist = document.querySelector("#artist");
const timeSong = document.querySelector("#timeSong");

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");

const backward = document.querySelector("#backward");
const playPause = document.querySelector("#playPause");
//pausePlay
const pause = document.querySelector("#pause");
const play = document.querySelector("#play");
const forward = document.querySelector("#forward");

//ICONOS
const heart = document.querySelector("#Give-It-An-Id");

//BARRA DE REPRODUCIÓN
const progress = document.querySelector("#progress");
const progress2 = document.querySelector("#progress2");

//DESPLEGABLE
const desplegable = document.querySelector("#desplegable");
const deslizador = document.querySelector("#deslizador");

back.addEventListener("click", () => {
  audio.play();
  window.history.back();
});

search.addEventListener("click", () => {
  audioInput.play();
  window.location.href = "../Search/Search.html";
});

options.addEventListener("click", () => {
  audio.play();
  desplegable.classList.add("visible");
});

backward.addEventListener("click", backwardMusic);
playPause.addEventListener("click", playPauseMusic);
forward.addEventListener("click", forwardMusic);

function playMusic() {
  music.play();
  pause.classList.remove("hide__btn");
  play.classList.add("hide__btn");
}

function pauseMusic() {
  music.pause();
  play.classList.remove("hide__btn");
  pause.classList.add("hide__btn");
}

function InfoSongUpdate(SongData) {
  music.src = SongData.src;
  image.src = SongData.image;
  nameSong.textContent = SongData.nameSong;
  artist.textContent = SongData.artist;
  heart.checked = SongData.itsFav;
  timeSong.textContent = SongData.timeSong;
}

function backwardMusic() {
  audio.play();
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  const SongData = songs[currentSongIndex];
  pauseMusic();
  InfoSongUpdate(SongData);
  playMusic();
}

function playPauseMusic() {
  audioPlay.play();
  if (music.paused) {
    playMusic();
  } else {
    pauseMusic();
  }
}

function forwardMusic() {
  audio.play();
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  const SongData = songs[currentSongIndex];
  pauseMusic();
  InfoSongUpdate(SongData);
  playMusic();
}

music.addEventListener("loadedmetadata", () => {
    progress.max = music.duration;
    progress.value = music.currentTime;
});

music.addEventListener("timeupdate", () => {
  if (!music.paused) {
    progress.value = music.currentTime;
    const progressPercent = (music.currentTime / music.duration) * 100;
    progress2.style.width = progressPercent + "%";
  }
});

progress.addEventListener("input", () => {
  if (!music.paused) {
    music.currentTime = progress.value;
    music.currentTime = progress2.value;
  }
});

progress.addEventListener("change", () => {
  music.currentTime = progress.value;
  music.currentTime = progress2.value;
  playMusic();
});

deslizador.addEventListener("click", () => {
  desplegable.classList.remove("visible");
});
