//  "activity": "Filtrar números mayores a 10 - Crea una función que reciba un arreglo y devuelva solo los números mayores a 10. 
//  (Tipo de función: Función de orden superior)",

const numero = (arr) => arr.filter(num => num>10);
console.log(numero([5,6,9,10,11,23,24,58,69]));
