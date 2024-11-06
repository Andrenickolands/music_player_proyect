//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audioPlay = new Audio('../../../assets/audio/click__play.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');
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
  window.history.back();
})

search.addEventListener("click", () => {
  audioInput.play();
  window.location.href = "../Search/Search.html";
})

options.addEventListener("click", () => {
  audio.play();
  desplegable.classList.add("visible");
})

backward.addEventListener("click", () => {
  audio.play();
})

playPause.addEventListener("click", () => {
  audioPlay.play();
  setTimeout(0.1);
  reproducirMusica();
})

function reproducirMusica() {
  playPause.addEventListener("canplaythrough", () => {
    music.play();
  });
}

forward.addEventListener("click", () => {
  audio.play();
})

deslizador.addEventListener("click", () => {
  desplegable.classList.remove("visible");
})
