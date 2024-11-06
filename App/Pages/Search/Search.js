//SONIDO
const audio = new Audio('../../../assets/audio/click.mp3');

//BOTONES
const back = document.querySelector("#back");
const search = document.querySelector("#search");
const exploreMap = document.querySelector("#exploreMap");

back.addEventListener("click", () => {
    audio.play();
    window.history.back();
})

search.addEventListener("click", () => {
    
})

exploreMap.addEventListener("click", () => {
    audio.play();
    window.location.href = "../explore/explore.html";
})