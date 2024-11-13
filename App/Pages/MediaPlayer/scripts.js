//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audioPlay = new Audio('../../../assets/audio/click__play.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');
const music = new Audio('../../../assets/audio/song1.mp3');

const songImage = document.querySelector("#songImage");
const songName = document.querySelector("#songName");

const songs = [
  { 
    src: '../../../assets/audio/song2.mp3',
    name: 'Canción 1',
    image: 'path/to/image1.jpg' 
  },
  { 
    src: '../../../assets/audio/song3.mp3',
    name: 'Canción 2',
    image: 'path/to/image2.jpg'
  },
  { 
    src: '../../../assets/audio/song1.mp3',
    name: 'Canción 3',
    image: 'path/to/image3.jpg'
  }

];

let currentSongIndex = 0;

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");

const backward = document.querySelector("#backward");
const playPause = document.querySelector("#play");
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
  music.play(); 

  playPause.textContent = "Pausar"; 
});

playPause.addEventListener("click", () => {
  audioPlay.play();
  if (music.paused) {
    music.play(); 
    playPause.textContent = "Pausar"; 
  } else {
    music.pause(); 
    playPause.textContent = "Reproducir"; 
  }
});

forward.addEventListener("click", () => {
  audio.play();
  currentSongIndex = (currentSongIndex + 1) % songs.length; 

  const nextSongData = songs[currentSongIndex];

  music.pause();
  music.src = nextSongData.src; 
  music.play(); 

 
  playPause.textContent = "Pausar"; 
});

deslizador.addEventListener("click", () => {
  desplegable.classList.remove("visible");
});
