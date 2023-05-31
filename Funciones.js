
// funcion calcula area de un Rectángulo
function calculaAreasRectangulo (a,b){
    return a*b;
}
let resultado=calculaAreasRectangulo (4,5);
console.log ("el area del rectangulo es "+ resultado);

//funcion es mayor de edad 
function esMayorDeEdad(user){
  let resultado;
  if(!user){
    
  }else{
    if(user>18){
      resultado="true";
    }else{
      resultado="false";
    }
  }
return resultado;
}
const edad=esMayorDeEdad(32);
console.log("¿el usuario es mayor de edad? "+edad);
//funcion genera un numero aleatorio

function generarNumeroAleatorio(){
 resultado=Math.ceil(Math.random()*10);
}  
let num=generarNumeroAleatorio();
console.log("numero al azar resultante " +resultado);

  //funcion palabra palindroma
  
function esPalindromo(cadena){
  let reverso=cadena.split("").reverse().join("");
  if( cadena=== reverso){
    mensaje ="es palindromo "
  }else{
    mensaje="no es palindromo"
  }
  return mensaje;
}
let  palabra="radar";
let res=esPalindromo(palabra)
console.log(res)