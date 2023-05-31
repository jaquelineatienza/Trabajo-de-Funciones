//programa que convierte grados celsius en grados Fahrenheit y viseversa 
let temperatura = parseFloat(prompt("Ingrese la temperatura:"));
let tipo = prompt("Ingrese la unidad de temperatura ('C' para Celsius, 'F' para Fahrenheit):");

// Función para convertir grados Celsius a Fahrenheit
function celsiusToFahrenheit(gradosCelsius) {
  let gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  return gradosFahrenheit;
}

// Función para convertir grados Fahrenheit a Celsius
function fahrenheitToCelsius(gradosFahrenheit) {
  let gradosCelsius = (gradosFahrenheit - 32) * 5/9;
  return gradosCelsius;
}


if (tipo === 'c' ) {
  let temperaturaFahrenheit = celsiusToFahrenheit(temperatura);
  document.write(temperatura + " grados Celsius equivalen a ",temperaturaFahrenheit );
} else if ( tipo === 'f') {
  let temperaturaCelsius = fahrenheitToCelsius(temperatura);
  document.write(temperatura + " grados Fahrenheit equivalen a " , temperaturaCelsius );

}