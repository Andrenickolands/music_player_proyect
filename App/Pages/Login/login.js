// INPUTS
const emailInput = document.querySelector("#email");  
const passwordInput = document.querySelector("#password");  

// BTNs
const signIn = document.querySelector("#signIn");  
const signUp = document.querySelector("#signUp");  

// Evento para el botón de Registro
signUp.addEventListener("click", () => {
    window.location.href = "Registrate/registrate.php";
});

