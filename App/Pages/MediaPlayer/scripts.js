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
    image: '../../../assets/img/Portada_nirvana.jpg'
  },
  {
    src: '../../../assets/audio/song2.mp3',
    name: 'Canción 2',
    nameSong: 'SORRY 4 THAT MUCH',
    artist: 'FERXXO',
    itsFav: true,
    image: '../../../assets/img/feid.jpg'
  },
  {
    src: '../../../assets/audio/song3.mp3',
    name: 'Canción 3',
    nameSong: 'Soltera',
    artist: 'Blessd',
    itsFav: true,
    image: '../../../assets/img/blessd.jpg'
  }
];

let currentSongIndex = 0;

//ITEMS
const image = document.querySelector("#image");
const nameSong = document.querySelector("#nameSong");
const artist = document.querySelector("#artist");
const timeSong = document.querySelector("#timeSong");
const timeNow = document.querySelector(".time_now");
const timeTotal = document.querySelector(".time_total");

const progressBar = document.querySelector("#progress");

// Actualiza el tiempo total cuando la canción se carga
music.addEventListener("loadedmetadata", () => {
  const minutes = Math.floor(music.duration / 60);
  const seconds = Math.floor(music.duration % 60);
  timeTotal.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

music.addEventListener("timeupdate", () => {
  const progressPercent = (music.currentTime / music.duration) * 100;
  progressBar.value = progressPercent;
  progressBar.style.background = `linear-gradient(to right, #6B73B5 ${progressPercent}%, #E0E5EC ${progressPercent}%)`;

  // Actualiza el tiempo transcurrido
  const minutes = Math.floor(music.currentTime / 60);
  const seconds = Math.floor(music.currentTime % 60);
  timeNow.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
});

// Permite que el usuario cambie la posición de la canción al mover la barra de progreso
progressBar.addEventListener("input", () => {
  const newTime = (progressBar.value / 100) * music.duration;
  music.currentTime = newTime;
  const progressPercent = progressBar.value;
  progressBar.style.background = `linear-gradient(to right, #6B73B5 ${progressPercent}%, #E0E5EC ${progressPercent}%)`;
});

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
  heart.checked = prevSongData.itsFav;
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
  heart.checked = nextSongData.itsFav;
  music.play();

  // Actualiza el tiempo total cuando la nueva canción se carga
  music.addEventListener("loadedmetadata", () => {
    const minutes = Math.floor(music.duration / 60);
    const seconds = Math.floor(music.duration % 60);
    timeTotal.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });

  pause.classList.remove("hide__btn");
  play.classList.add("hide__btn");
});

deslizador.addEventListener("click", () => {
  desplegable.classList.remove("visible");
});