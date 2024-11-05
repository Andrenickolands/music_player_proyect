//SONIDO
const audioInput = new Audio('../../assets/audio/click__input.mp3');
const audio = new Audio('../../assets/audio/click.mp3');

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");

//DESPLEGABLE
const desplegable = document.querySelector("#desplegable-explore");
const deslizador = document.querySelector("#deslizador");

back.addEventListener("click", () => {
    audio.play();
  })
  
  search.addEventListener("click", () => {
    audioInput.play();
  })
  
  options.addEventListener("click", () => {
    audio.play();
    desplegable.classList.add("visible");
  })

  deslizador.addEventListener("click", () => {
    desplegable.classList.remove("visible");
  })