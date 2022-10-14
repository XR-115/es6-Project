const needle = require('needle')

let url = 'https://rickandmortyapi.com/api/character'

needle('get', url)
            .then((response)=>{
                return response.body.results
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