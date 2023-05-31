// Programa que verifica si un numero es primo o no
let number = parseInt(prompt("Ingrese un número:"));

// Función para verificar si un número es primo
function esPrimo(number) {

  if (number === 1) {
    return false;
  }
  for (var i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}


if (esPrimo(number)) {
  document.write("El número ingresado es primo.");
} else {
  document.write("El número ingresado no es primo.");
}
