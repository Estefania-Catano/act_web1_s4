// 18. Validar correo electrónico
// Tarea: Crea una función que valide si una cadena es un correo electrónico básico (contiene @ y .com).
// Tipo de función: Declaración de función
// Ejemplo: esCorreo("test@example.com") → true

function esCorreo(cadena) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(cadena);
}

let email = "test@example.com";
console.log(`¿"${email}" es un correo válido? → ${esCorreo(email)}`);
