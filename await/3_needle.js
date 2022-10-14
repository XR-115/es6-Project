const needle = require('needle')

let url = 'https://rickandmortyapi.com/api/character'

const f = async()=>{
    try {
        let response = await needle(url)
        response.body.results.forEach(personaje => {
            console.log("    ");
            console.log(`Nombre: ${personaje.name}`);
            console.log(`Género: ${personaje.gender}`);
            console.log("    ");
            console.log("/*------*-------*/");
        });
    } catch (error) {
        console.error(error);
    }
}
f()
