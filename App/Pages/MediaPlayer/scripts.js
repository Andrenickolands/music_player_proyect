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
    timeSong: '4:17',
    image: '../../../assets/img/Portada_nirvana.jpg'
  },
  {
    src: '../../../assets/audio/song2.mp3',
    name: 'Canción 2',
    nameSong: 'SORRY 4 THAT MUCH',
    artist: 'FERXXO',
    timeSong: '3:27',
    image: '../../../assets/img/feid.jpg'
  },
  {
    src: '../../../assets/audio/song3.mp3',
    name: 'Canción 3',
    nameSong: 'Soltera',
    artist: 'Blessd',
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

backward.addEventListener("click", () => {
  audio.play();
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;

  const prevSongData = songs[currentSongIndex];

  music.pause();
  music.src = prevSongData.src;
  image.src = prevSongData.image;
  nameSong.textContent  = prevSongData.nameSong;
  artist.textContent  = prevSongData.artist;
  timeSong.textContent  = prevSongData.timeSong;
  music.play();

  pause.classList.remove("hide__btn");
  play.classList.add("hide__btn");
});

playPause.addEventListener("click", () => {
  audioPlay.play();
  if (music.paused) {
    music.play();

    pause.classList.remove("hide__btn");
    play.classList.add("hide__btn");
  } else {
    music.pause();

    play.classList.remove("hide__btn");
    pause.classList.add("hide__btn");
  }
});

forward.addEventListener("click", () => {
  audio.play();
  currentSongIndex = (currentSongIndex + 1) % songs.length;

  const nextSongData = songs[currentSongIndex];

  music.pause();
  music.src = nextSongData.src;
  image.src = nextSongData.image;
  nameSong.textContent = nextSongData.nameSong;
  artist.textContent = nextSongData.artist;
  timeSong.textContent = nextSongData.timeSong;
  music.play();

  pause.classList.remove("hide__btn");
  play.classList.add("hide__btn");
});

deslizador.addEventListener("click", () => {
  desplegable.classList.remove("visible");
});
