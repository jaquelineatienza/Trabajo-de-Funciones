//*Crear un programa que pida al usuario que ingrese un número y le devuelva un
//mensaje indicando si el número es positivo, negativo o si es 0.

let numero = prompt("Ingrese un número:");
num= parseFloat(numero);
// Verificar si el número es positivo, negativo o igual a 0
function positivoNegativoNulo(){
    if (numero > 0) {
        document.write("El número ingresado es positivo.");
      } else 
        if (numero < 0) {
        document.write("El número ingresado es negativo.");
      } else {
        document.write("El número ingresado es 0.");
      }
}

