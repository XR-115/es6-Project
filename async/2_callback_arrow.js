let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let anime='https://rickandmortyapi.com/api/character';

const exito= (response)=> {

    const personajes = JSON.parse(response).results
    personajes.forEach((personaje) => {
        console.log(`Personaje: ${personaje.species}`);
        console.log("/*----------------*/");
    });
    /*const tipos = JSON.parse(response).results
    tipos.forEach((tipo)=>{
        console.log(`Tipo: ${tipo.name}`);
        console.log("-----------------")
    })*/
    //console.log(JSON.parse(response.data))
    
}

const fallo=(status)=> {
    console.log(status)
    console.log("No se logró gente")
}

 const get_data=(anime, exito, fallo)=> {
    //CREACIÓN OBJETO CONEXIÓN API
    let http = new XMLHttpRequest()
    //ABRIR CONEXIÓN API
    http.open('get', anime)
    //ENVIAR SOLICITUD A LA API
    http.send()
    //HACER TRATAMIENTO DE LA RESPONSE 
    http.onload = ()=> {
        if (http.status === 200) {
            exito(http.responseText)
        }else(
        fallo(http.status)
        )
    }
    //FALLO
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
 }
 //INVOCAR FUNCION
 get_data(anime, exito, fallo)
// console.log();