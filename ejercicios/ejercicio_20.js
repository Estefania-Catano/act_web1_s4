// 20. Calcular promedio de un arreglo
// Tarea: Crea una función que calcule el promedio de un arreglo de números.
// Tipo de función: Función flecha
// Ejemplo: promedio([10, 20, 30]) → 20

const promedio = (numeros) => {
    if (numeros.length === 0) return 0;
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return suma / numeros.length;
}
console.log(`el promedio es: ${promedio([10, 20, 30])}`); 
