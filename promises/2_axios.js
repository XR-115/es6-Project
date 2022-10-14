const axios= require('axios')

let config = {
    method: 'get',
    url: "https://rickandmortyapi.com/api/character"
}

axios(config)
            .then((response)=>{
               return response.data.results
            })
               .then((data)=>{
                data.forEach(personaje => {
                    console.log("    ");
                    console.log(`Nombre: ${personaje.name}`);
                    console.log(`Género: ${personaje.gender}`);
                    console.log("    ");
                    console.log("/*------*-------*/");
                });
               })
            
                
             
            .catch((status)=>{
                console.log(status)
            })