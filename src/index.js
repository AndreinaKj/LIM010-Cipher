//Definir variables y llamar el id de los sections
const login = document.getElementById("login");
const centralPage = document.getElementById("central-page");
const finalPage = document.getElementById("final-page");
const errorPage = document.getElementById("error-page");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");
const passwError = document.getElementById("passw-error");
const number = document.getElementById("number");
const message = document.getElementById("message");
const inicio = document.getElementById("inicio");
const copiar = document.getElementById("copy");
const finalMessage = document.getElementById("final-message");
const lastPage = document.getElementById("last-page");
const lastMessage = document.getElementById("last-message");
const copy2 = document.getElementById("copy2");
const inicio2 = document.getElementById("inicio2");

//Definir variable para realizar función 
const passwordTrue = "LABORATORIA";
let nroIntentos = 0;

//Función para validar contraseña correcta
const validar = () => { 
const password = document.getElementById("password");
    if (password.value === passwordTrue) {
        login.classList.add("hide");
        centralPage.classList.replace("hide", "show");
//Verificar si la clave es incorrecta 3 veces
    } else {
        if (nroIntentos < 2) {
            passwError.classList.replace("hide", "show");
            password.value = "";
            nroIntentos++; 
//En caso la contraseña sea incorrecta, mostrar la página de error.
        } else {
            login.classList.add("hide");
            passwError.classList.add("hide");
            errorPage.classList.replace("hide","show");
        }
    }

}  
//Evento que indica ejecutar la funcion validar (la anterior) al momento de hacer click
 const botonEntrar = document.getElementById("entrar");
botonEntrar.addEventListener("click", validar);


//Agregar funcionalidad al boton cifrar. Enlace a la página final.
cifrar.addEventListener("click", () => {
    centralPage.classList.add("hide");
    finalPage.classList.replace("hide", "show" );
})

//Agregar funcionalidad al boton descifrar. Enlace a la página final.
descifrar.addEventListener("click", () => {
    centralPage.classList.add("hide");
    lastPage.classList.replace("hide", "show" );
})

//Agregar funcionalidad al boton inicio. Enlace a la página central. (CIFRAR)
inicio.addEventListener("click", () => {
    finalPage.classList.add("hide");
    message.value = "";
    number.value = "";
    centralPage.classList.replace("hide", "show" );
})

//Agregar funcionalidad al boton inicio. Enlace a la página central. (DESCIFRAR)
inicio2.addEventListener("click", () => {
    lastPage.classList.add("hide");
    message.value = "";
    number.value = "";
    centralPage.classList.replace("hide", "show" );
})

//Evento - click al botón cifrado 
cifrar.addEventListener("click", () => {
    const mensaje2 = window.cipher.encode(number.value,message.value);
    finalMessage.value = mensaje2;
}); 

//Evento - click al botón descifrado 
descifrar.addEventListener("click", () =>{
    const mensaje3 = window.cipher.decode(number.value,message.value)
    lastMessage.value = mensaje3;
})

//Copiar en portapapeles los datos contenidos en el input de resultado de cifrado
copiar.addEventListener("click", () => {
    finalMessage.select();
    document.execCommand("copy");
});

//Copiar en portapapeles los datos contenidos en el input de resultado de descifrado
copy2.addEventListener("click", () => {
    lastMessage.select();
    document.execCommand("copy");
});



/* const boton = document.getElementById("botoncito");
boton.addEventListener("click", () =>{
    boton.classList.add("hide");
})   
 
const boton = document.getElementById("entrar");
boton.addEventListener("click", () => {
    boton.classList.replace("hide" , "show");
}) */
