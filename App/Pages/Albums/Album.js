//SONIDO
const audioInput = new Audio('../../../assets/audio/click__input.mp3');
const audio = new Audio('../../../assets/audio/click.mp3');

//BOTONES
const menu = document.querySelector("#menu");
const search = document.querySelector("#search");
const exploreMap = document.querySelector("#exploreMap");

//ALBUM
const album = document.querySelector("#album");

//DESPLEGABLE
const desplegableMenu = document.querySelector("#desplegable-menu");
const deslizadorMenu = document.querySelector("#deslizador-menu");

//ITEMS
const logOut = document.querySelector("#logOut");

menu.addEventListener("click", () => {
    audio.play();
    desplegableMenu.classList.add("visible");
})

search.addEventListener("click", () => {
    audioInput.play();
    window.location.href = "../Search/Search.html";
})

exploreMap.addEventListener("click", () => {
    audio.play();
    window.location.href = "../explore/explore.html";
})

deslizadorMenu.addEventListener("click", () => {
    desplegableMenu.classList.remove("visible");
})

album.addEventListener("click", () => {
    window.location.href = "../List/List.html";
})

logOut.addEventListener("click", () => {
    window.location.href = "../Login/login.php";
})