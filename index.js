//let variables simples como
//number, strings, booleans
// let lenguaje = "ENSAMBLADOR"

// // constantes para: funciones, arreglos y objetos
// const saludo = 'Hola mundo';

// console.log(`hola, odio ${ lenguaje }`) 

import { materias } from "./materias.js";
import pkg from 'colors';


// metodos de los objeto arreglo
// foreach: permite recorrer un arreglo

// materias.forEach(function(materia){

//     if (materia.tipo === 'tecnica') {
//         console.log(`materia: ${materia.nombre}`.yellow)
//         console.log(`profesor: ${materia.instructor}`.blue)
//     }
   

// })


// map: construye un arreglo con base en otro 

const profesores = materias.map((materia)=>{
  return materia.instructor
})


// console.log(profesores);

//find: encontrar la primera ocurrencia(elemento) 
//en el arrelgo que cumpla una condicion dada

const php = materias.filter((materia)=>{
    return materia.instructor === "Cristian Buitrago"
})

//console.log(php);

//push : se agrega otra materia 

/*materias.push(
    {
        id:5,
        nombre: "Java avanzado",
        instructor: "Tatiana Cabrera",
        tipo: "tecnica",
        notas:
        [
            4.5,
            4,
            3.2
        ]
    }
)*/

//splice: delete

materias.splice(
    
        1,1
    
)

//actualizar: findIndex
// materias.splice(
//     0,1,"jOHAN","PHP","CCC"
//     )

    console.log(materias);




