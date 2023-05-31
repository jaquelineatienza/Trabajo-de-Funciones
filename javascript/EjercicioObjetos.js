//Ejercicio de objetos 

//Ejercicio en el que se crea una calculadora para saber total de precios
function calculaTotal( ){
    const total=producto.precio*producto.cantidad;
    return total;
   
   }
   let producto={
     nombre: "producto1"
     ,precio:120
     ,cantidad:2
   }
   const totalPagar=calculaTotal()



//Ejercicio Implementa un objeto llamado Persona.
let  persona = {
    nombre: "",
    edad: 0,
    profesion: ""
  };
  
  // Función para presentar una persona
  function presentarPersona(persona) {
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Profesión: " + persona.profesion);
  }
  
  
  let Persona1 = {
    nombre: "Luis",
    edad: 24,
    profesion: "Locutor"
  };
  
  presentarPersona(Persona1);


  //Funcion con
  let people={
    edad:0
  };
  //funcion para saber si el objeto ingresado es mayor de edad
  function esMayorDeEdad(people){
    let resultado;
    if(!people){
      
    }else{
      if(people.edad>=18){
        resultado="true";
      }else{
        resultado="false";
      }
    }
  return resultado;
  }
  let people1={
    edad:19
  }
  console.log(esMayorDeEdad(people1));
  
    