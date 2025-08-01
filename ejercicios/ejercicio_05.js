// "activity": "Contar vocales en una cadena - Crea una función que cuente las vocales (a, e, i, o, u) en una cadena. 
// (Tipo de función: Función recursiva)",

function contar(n){
    const vocales =n.match(/[aeiou]/gi);
    return vocales ? vocales.length : 0;
    }
    console.log(contar("Murcielago"));
    