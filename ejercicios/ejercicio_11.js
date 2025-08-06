// "activity": "Verificar si un número es par - Crea una función que determine si un número es par. 
// (Tipo de función: Declaración de función)",

function par(n) {
    if (n % 2 === 0) {
        return "es par";
    } else {
        return "no es par";
    }
}

let numero = 10;
console.log("El número " + numero + " " + par(numero) + ".");

