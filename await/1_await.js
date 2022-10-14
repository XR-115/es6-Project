const { get } = require("request");

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let anime='https://rickandmortyapi.com/api/character';


const get_data=(anime)=> {

    //PROMESA PARA CONEXIÓN API
    let promise= new Promise((resolve,reject) => {

        //CREACIÓN OBJETO CONEXIÓN API
        let http = new XMLHttpRequest()
        //ABRIR CONEXIÓN API
        http.open('get', anime)
        //ENVIAR SOLICITUD A LA API
        http.send()
        //HACER TRATAMIENTO DE LA RESPONSE 
        http.onload = ()=> {
            if (http.status === 200) {
                resolve(http.responseText)
            }else{
            //FALLO
            reject(http.status)
            }
        }
        
    })
        return promise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
 }
 
const exito= (response)=> {

    const personajes = JSON.parse(response).results
    personajes.forEach((personaje) => {
        console.log("    ");
        console.log(`Nombre: ${personaje.name}`);
        console.log(`Género: ${personaje.gender}`);
        console.log("    ");
        console.log("/*--------------*/");
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


async function f() {
    try {
        let response = await get_data(anime)
    exito(response);
    } catch (error) {
        fallo(error)
    }
   
}
 

f()


 //INVOCAR FUNCION

//  console.log();
