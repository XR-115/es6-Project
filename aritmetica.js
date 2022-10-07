//IMPORTAR COMMON JS

import {suma,resta,multiplicar,dividir,elevar} from './operaciones.js';

const a=10;

const b=30;

console.log(`la suma es: ${suma(a,b)}`); 
console.log(`la resta es: ${resta(a,b)}`); 
console.log(`la multiplicación es: ${multiplicar(a,b)}`);
console.log(`la división es: ${dividir(a,b)}`);
console.log(`la elevación es: ${elevar(a,b)}`);

//Función tradicional
/*function suma(a, b) {
    console.log(`la suma es: ${a+b}`); 
}

suma(a, b)*/

//Función identificador
/*const suma=function(a, b) {
    console.log(`la suma es: ${a+b}`); 
}

suma(a, b)*/


