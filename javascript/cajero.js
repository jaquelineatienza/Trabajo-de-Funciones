function calcularTotalCompra() {
    let totalCompra = 0;
  
    while (true) {
      var input = prompt("Ingrese el precio del producto (o 'total' para obtener el total de la compra):");
  
      if (input.toLowerCase() === "total") {
        break;
      }
  
      let precioProducto = parseFloat(input);
      if (!isNaN(precioProducto)) {
        totalCompra += precioProducto;
      } else {
        console.log("¡Precio inválido! Ingrese un número válido o la palabra 'total'.");
      }
    }
  
    return totalCompra;
  }
  
  let total = calcularTotalCompra();
  console.log("El total de la compra es: $" + total.toFixed(2));
  
