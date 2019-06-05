//Definir variables y llamar el id de los sections
const login = document.getElementById("login");
const centralPage = document.getElementById("centralPage");
const finalPage = document.getElementById("finalPage");
const errorPage = document.getElementById("errorPage");
const cifrar = document.getElementById("cifrar");
const descifrar = document.getElementById("descifrar");

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
            console.log("Clave incorrecta");
            password.value = "";
            nroIntentos++; 
//En caso la contraseña sea incorrecta, mostrar la página de error.
        } else {
            login.classList.add("hide");
            errorPage.classList.replace("hide","show");
        }
    }

}  
//Evento que indica ejecutar la funcion validar (la anterior) al momento de hacer click
 const botonEntrar = document.getElementById("entrar");
botonEntrar.addEventListener("click", validar);

//Agregar funcionalidad al boton cifrar. Enlace a la página final.


/* const boton = document.getElementById("botoncito");
boton.addEventListener("click", () =>{
    boton.classList.add("hide");
})   
 
const boton = document.getElementById("entrar");
boton.addEventListener("click", () => {
    boton.classList.replace("hide" , "show");
}) */
