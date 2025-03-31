import {PI, sumar, multiplicar, dividir, restar, array} from './modules/matematica.js'

let suma, numero1=10, numero2=20, resta, division, multipliacacion;
console.clear();

console.log(`La constante PI vale '${PI}'`); 

console.log(`El array contiene: '${array}'`); 

suma = sumar(numero1, numero2); 
console.log(`sumar(${numero1}, ${numero2}) = ${suma}`);

resta = restar(numero1, numero2);
console.log(`restar(${numero1}, ${numero2}) = ${resta}`);

division = dividir(numero1, numero2); 
console.log(`divdir(${numero1}, ${numero2}) = ${division}`);

multipliacacion = multiplicar(numero1, numero2); 
console.log(`multiplicar(${numero1}, ${numero2}) = ${multipliacacion}`);