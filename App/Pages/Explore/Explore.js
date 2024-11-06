//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");

//DESPLEGABLE
const desplegable = document.querySelector("#desplegable-explore");
const deslizador = document.querySelector("#deslizador");

let isResizing = false;
let startY;
let startHeight;

back.addEventListener("click", () => {
  audio.play();
  window.history.back();
})

search.addEventListener("click", () => {
  audioInput.play();
  window.location.href = "../Search/Search.html";
})

deslizador.addEventListener("click", () => {

})

////////RESIZEZ////////

deslizador.addEventListener('mousedown', (e) => {
  isResizing = true;
  startY = e.clientY;
  startHeight = desplegable.clientHeight;
});

document.addEventListener('mousemove', (e) => {
  if (!isResizing) return;
  const dy = e.clientY - startY - startHeight;
  desplegable.style.height = Math.max(startHeight + dy, 16) + '%';
  desplegable.style.height = Math.min(startHeight + dy, 95) + '%';
});

document.addEventListener('mouseup', () => {
  isResizing = false;
});
