// "activity": "Sumar elementos de un arreglo - Crea una función que sume todos los números de un arreglo. 
// (Tipo de función: Función flecha)"

const sumar = (arr) => {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
                total += arr[i];
        }
        return total;
};
console.log(sumar([1, 2, 3, 4, 5]));