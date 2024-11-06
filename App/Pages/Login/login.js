//INPUTS
const email = document.querySelector("#email");  
const password = document.querySelector("#password");  

//BTNs
const signIn = document.querySelector("#signIn");  
const signUp = document.querySelector("#signUp");  

signIn.addEventListener("click", () => {
    window.location.href = "../Albums/Album.html";
})

signUp.addEventListener("click", () => {
    window.location.href = "Registrate/registrate.html";
})