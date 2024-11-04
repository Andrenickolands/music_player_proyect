//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audioPlay = new Audio('../../assets/audio/click__play.mp3');
const audio = new Audio('../../assets/audio/click.mp3');
const music = new Audio('AUDIO');

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
})

search.addEventListener("click", () => {
  audioInput.play();
})

options.addEventListener("click", () => {
  audio.play();
  desplegable.add("visible");
})

backward.addEventListener("click", () => {
  audio.play();
})

playPause.addEventListener("canplaythrough", () => {
  audioPlay.play();
  music.play();
})

forward.addEventListener("click", () => {
  audio.play();
})

deslizador.addEventListener("click", () => {
  desplegable.remove("visible");
})
