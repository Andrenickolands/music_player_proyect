//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audio = new Audio('../../assets/audio/click.mp3');

//BOTONES options-album
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");
const optionsAlbum = document.querySelector("#options-album");

//DESPLEGABLE desplegable-album
const desplegableAlbum = document.querySelector("#desplegable-album");
const deslizadorAlbum = document.querySelector("#deslizador-album");
const desplegable = document.querySelector("#desplegable");
const deslizador = document.querySelector("#deslizador");

back.addEventListener("click", () => {
    audio.play();
})

search.addEventListener("click", () => {
    audioInput.play();
})

optionsAlbum.addEventListener("click", () => {
    audio.play();
    desplegableAlbum.classList.add("visible");
})

deslizadorAlbum.addEventListener("click", () => {
    desplegableAlbum.classList.remove("visible");
})

options.addEventListener("click", () => {
    desplegable.classList.add("visible");
})

deslizador.addEventListener("click", () => {
    desplegable.classList.remove("visible");
})