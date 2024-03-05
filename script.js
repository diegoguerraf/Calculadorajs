var num1 = parseFloat(prompt("Ingrese el primer número:"));
var num2 = parseFloat(prompt("Ingrese el segundo número:"));

var suma = num1 + num2;
var resta = num1 - num2;
var division = num1 / num2;
var multiplicacion = num1 * num2;
var modulo = num1 % num2;

alert("Suma: " + suma + "\n" +
      "Resta: " + resta + "\n" +
      "División: " + division + "\n" +
      "Multiplicación: " + multiplicacion + "\n" +
      "Módulo: " + modulo);

var celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

var kelvin = celsius + 273.15;
var fahrenheit = (celsius * 9/5) + 32;

alert("Temperatura en Kelvin: " + kelvin + "\n" +
      "Temperatura en Fahrenheit: " + fahrenheit);

var dias = parseInt(prompt("Ingrese la cantidad de días:"));


var anos = Math.floor(dias / 365);
var semanas = Math.floor((dias % 365) / 7);
var diasRestantes = dias - (anos * 365) - (semanas * 7);

alert("Años: " + anos + "\n" +
      "Semanas: " + semanas + "\n" +
      "Días: " + diasRestantes);

var num3 = parseFloat(prompt("Ingrese el primer número:"));
var num4 = parseFloat(prompt("Ingrese el segundo número:"));
var num5 = parseFloat(prompt("Ingrese el tercer número:"));
var num6 = parseFloat(prompt("Ingrese el cuarto número:"));
var num7 = parseFloat(prompt("Ingrese el quinto número:"));

var sumaTotal = num3 + num4 + num5 + num6 + num7;

var promedio = sumaTotal / 5;

alert("La suma de los números es: " + sumaTotal + "\n" +
      "El promedio de los números es: " + promedio);
