// 17. Ejecutar operación personalizada
// Tarea: Crea una función que reciba dos números y una función callback para realizar una operación.
// Tipo de función: Función de orden superior
// Ejemplo: operacion(5, 3, (a, b) => a * b) → 15

const operacion = (num1, num2, callback) => {
    return callback(num1, num2);
}

console.log(operacion(5, 3, (a, b) => a * b));
