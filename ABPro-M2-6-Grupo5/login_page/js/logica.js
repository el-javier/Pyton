
function login() { // Declara la función login
    var user, password // se declaran las variables "user" y "password"

    user = document.getElementById("usuario").value; // Obtiene el valor de email y lo almacena en la variable "user"
    password = document.getElementById("contrasena").value; // Obtiene el valor del campo de contraseña y lo almacena en la variable "password"

    if (user == "fenix@gmail.com" && password == "123") { // Comprueba si el email y la contraseña son iguales a los valores preestablecidos
        window.location.href ="../index.html"; // Redirige a la página de ejemplo si los valores son correctos
    } else {
        var mensajeError = document.getElementById('msj-error'); // Obtiene el elemento de alerta de error y lo almacena en la variable "mensajeError"
        mensajeError.classList.remove('visually-hidden'); // Quita la clase "visually-hidden" del elemento de alerta de error para que sea visible al usuario
    }
}
