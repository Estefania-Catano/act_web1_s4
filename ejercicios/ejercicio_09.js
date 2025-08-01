//  "activity": "Crear un contador privado - Crea una función que devuelva otra función para contar incrementos, 
//  manteniendo el contador privado. (Tipo de función: IIFE con closure)"

const contador =(function() {
let cuenta = 0;

return function(){
    cuenta ++;
    return cuenta
}
})();

console.log(contador());
console.log(contador());

