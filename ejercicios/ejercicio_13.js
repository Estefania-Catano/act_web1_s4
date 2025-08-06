//  "activity": "Reemplazar espacios por guiones - Crea una función que reemplace los espacios en una cadena por guiones. 
//  (Tipo de función: Expresión de función)",

const reemplazarEspaciosPorGuiones = function(cadena) {
    return cadena.replace(/ /g, '-');
}

let texto = "Hola mundo, esto es un ejercicio";
console.log(reemplazarEspaciosPorGuiones(texto));
