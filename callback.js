function llamarAlumno(alumno, callback) {
    let llamadaAlumno = `Llamando a alumno: ${alumno}`
    callback(llamadaAlumno)
}

//definir lo que se va a llamar
const imprimir= (texto)=>{
    console.log(texto);
}

//Invocar la función principal llamar Alumno
llamarAlumno("Johan Reyes", imprimir)