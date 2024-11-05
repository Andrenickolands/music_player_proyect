//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audio = new Audio('../../assets/audio/click.mp3');

//BOTONES
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");
const exploreMap = document.querySelector("#exploreMap");

//DESPLEGABLE
const desplegableMenu = document.querySelector("#desplegable-menu");
const deslizadorMenu = document.querySelector("#deslizador-menu");

menu.addEventListener("click", () => {
    audio.play();
    desplegableMenu.classList.add("visible");
})

search.addEventListener("click", () => {
    audioInput.play();
})

exploreMap.addEventListener("click", () => {
    audio.play();
})

deslizadorMenu.addEventListener("click", () => {
    desplegableMenu.classList.remove("visible");
})