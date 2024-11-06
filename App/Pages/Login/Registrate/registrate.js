//INPUTS
const name = document.querySelector("#name");  
const email = document.querySelector("#email");
const celular = document.querySelector("#celular");  
const date = document.querySelector("#date");  
const password = document.querySelector("#password");  
const confirmPassword = document.querySelector("#confirmPassword");    

//BTNs
const registrate = document.querySelector("#registrate");  

registrate.addEventListener("click", () => {
    window.location.href = "../Albums/Album.html";
})