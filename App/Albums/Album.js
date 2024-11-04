//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audio = new Audio('../../assets/audio/click.mp3');

//BOTONES
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");
const exploreMap = document.querySelector("#exploreMap");

menu.addEventListener("click", () => {
    audio.play();
})

search.addEventListener("click", () => {
    audioInput.play();
})

exploreMap.addEventListener("click", () => {
    audio.play();
})