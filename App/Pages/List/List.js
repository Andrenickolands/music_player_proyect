//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const options = document.querySelector("#options");
const optionsAlbum = document.querySelector("#options-album");

//SONG
const song = document.querySelector("#song-item");
const song2 = document.querySelector("#song2-item");
const song3 = document.querySelector("#song3-item");

//DESPLEGABLE
const desplegableAlbum = document.querySelector("#desplegable-album");
const deslizadorAlbum = document.querySelector("#deslizador-album");
const desplegable = document.querySelector("#desplegable");
const deslizador = document.querySelector("#deslizador");

//ITEMS DESPLEGABLE

back.addEventListener("click", () => {
    audio.play();
    window.history.back();
})

search.addEventListener("click", () => {
    audioInput.play();
    window.location.href = "../Search/Search.html";
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

song.addEventListener("click", () => {
    localStorage.setItem('selectedSongIndex', 0);
    window.location.href = "../MediaPlayer/player.html";
})
song2.addEventListener("click", () => {
    localStorage.setItem('selectedSongIndex', 1);
    window.location.href = "../MediaPlayer/player2.html";
})
song3.addEventListener("click", () => {
    localStorage.setItem('selectedSongIndex', 2);
    window.location.href = "../MediaPlayer/player3.html";
})