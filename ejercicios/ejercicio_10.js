//  "activity": "Calcular factorial - Crea una función que calcule el factorial de un número. (Tipo de función: Función recursiva)",

function factorial(n){
if (n<=1) return 1;
return n*factorial(n-1)
}

console.log(factorial(10));

