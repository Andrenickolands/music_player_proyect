//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audio = new Audio('../../assets/audio/click.mp3');

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");

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