//CLASE 5 - Lunes 2 de mayo de 2022
//Estructuras de Control - CICLOS

//Ejercicio 3: Par/Impar
/*
• Realizar un algoritmo que dado un número entero ingresado 
por el usuario, visualice en pantalla si es par o impar
• En el caso de ingresar un cero, se debe volver a pedir el número 
por teclado (hasta que se ingrese un número mayor que cero)
*/
let numIngresado = Number(prompt("Ingrese un número mayor a cero"));
while (numIngresado <= 0) {
  numIngresado = Number(prompt("Ingrese otro número mayor a cero:"));
}
if (numIngresado % 2 === 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
