// "activity": "Saludar con nombre por defecto - Crea una función que salude a una persona por su nombre. 
// Si no se proporciona un nombre, usa 'Invitado'. (Tipo de función: Expresión de función)",

function saludo(nombre= "Invitado"){
    return `Hola, ${nombre}`
}
console.log(saludo("Laura"));
console.log(saludo());

