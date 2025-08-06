// 15. Invertir una cadena
// Tarea: Crea una función que invierta una cadena de texto.
// Tipo de función: Función recursiva
// Ejemplo: invertir("hola") → aloh

function invertir(cadena, index = cadena.length - 1) {
    if (index < 0) return '';
    return cadena[index] + invertir(cadena, index - 1);
}  

console.log(invertir("hola"));


