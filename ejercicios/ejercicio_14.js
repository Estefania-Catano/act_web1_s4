// Generar un ID único
// Tarea: Crea una función que genere un ID único basado en un contador interno.
// Tipo de función: IIFE con closure
// Ejemplo: generarId() → 1, generarId() → 2

const generarId = (function() {
    let contador = 0;
    return function() {
        contador++;
        return contador;
    }
})();

console.log(generarId());
console.log(generarId());
console.log(generarId()); 