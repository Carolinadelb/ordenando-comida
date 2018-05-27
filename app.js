window.onload = function () {

//Bienvenida
let startMenu = alert ("Bienvenido a Restaurant sin comida");
// Comienzo de preguntas
switch (prompt ("¿Qué desea ordenar?")){
  
  case "ceviche": 
  alert("Ceviche no esta en el menú");
  prompt("Pide otro plato");
  
  case "tacos al pastor":
  alert("Tampoco tenemos tacos al pastor");
  prompt("¿Qué deseas ordenar?");

  case "empanada chilena":
  alert("No se lo que es una empana' chilena");
  prompt("¿Otra cosita?");

  case "hamburguesa":
  default: alert("¡Eso si tenemos!");
}
}