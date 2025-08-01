// "activity": "Multiplicar elementos de un arreglo - Crea una función que multiplique todos los números de un arreglo. 
// (Tipo de función: Función de orden superior)",

const multiplicar = (arr) => arr.reduce ((acc, num) => acc*num,1);
console.log(multiplicar([1,2,3,4,5]));
