let colors = require('colors');

/*let {Nombre, Identificacion,Apellido}= estudiante

 console.log(Apellido.bgBlue)
 console.log(Nombre.bgRed)
 console.log(Identificacion)*/
// const estudiantes= ["Laurita","Carlos","Ana","Jorge"]

const g1= [
    "Laurita",
    "Carlos",
    "Ana"]


const g2= [
    "Enrique",
    "Jairo",
    "Valeria"]


const g3= [
    ...g1,
    "Diana",
    ...g2,
    "Duvan"]
// desestructuracion 
// let [, C, , J] = estudiantes

const estudiante={
    id: 1,
    Nombre: `johan`,
    Apellido: `garzon reyes`,
    Identificacion: 1032798029,
    amigos : g3
}

console.log(estudiante);
 