


//ejercicio de arreglos 

//Suma de los arrays


 function obteneSuma(arregloNum ){
  let resultado=0;
  for (i=0;i<arregloNum.length;i++){
    resultado+=arregloNum[i];
  }
  return resultado;
 }
 let arregloNum=[1,2,3,4,5,6,7,8,9]
let sumaT=obteneSuma(arregloNum);
console.log("el resultado de la suma de todos los parametros del arreglo es "+ sumaT);
//promedio Ponderado 

function obtenerPromedioPonderado(notas, pesos) {
  let sumaNotasPesos = 0;
  let sumaPesos = 0;

  for (let i = 0; i < notas.length; i++) {
    sumaNotasPesos += notas[i] * pesos[i];
    sumaPesos += pesos[i];
  }

  const promedioPonderado = sumaNotasPesos / sumaPesos;
  return promedioPonderado;
}

// Ejemplo de uso
const notas = [7, 8, 9];
const pesos = [0.3, 0.4, 0.3];

const promedio = obtenerPromedioPonderado(notas, pesos);
console.log("el promedio de las notas es "+ promedio);

//Arreglo mayo numero

function obtenerMayorNumero(arreglo) {
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  return mayor;
}
const numeros = [5, 8, 2, 1, 9, 4];
const mayorNumero = obtenerMayorNumero(numeros);
console.log("el numero mayor es"+ mayorNumero);

