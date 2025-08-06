// "activity": "Contar vocales en una cadena - Crea una función que cuente las vocales (a, e, i, o, u) en una cadena. 
// (Tipo de función: Función recursiva)",

function contarVocales(cadena, index = 0) {
    if (index >= cadena.length) return 0;

    const letra = cadena[index].toLowerCase();
    const esVocal = "aeiou".includes(letra);

    return (esVocal ? 1 : 0) + contarVocales(cadena, index + 1);
}

console.log(contarVocales("Murcielago")); // Resultado: 5
