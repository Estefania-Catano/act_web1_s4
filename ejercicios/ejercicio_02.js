// "activity": "Saludar con nombre por defecto - Crea una función que salude a una persona por su nombre. 
// Si no se proporciona un nombre, usa 'Invitado'. (Tipo de función: Expresión de función)",

let nombreUsuario = "Estefania";

function saludo() {
    if (typeof nombreUsuario !== 'undefined' && nombreUsuario) {
        return `Hola, ${nombreUsuario}`;
    } else {
        return "Hola, Invitado";
    }
}

console.log(saludo());
