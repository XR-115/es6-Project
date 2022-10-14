const axios= require('axios')

let config = {
    method: 'get',
    url: "https://rickandmortyapi.com/api/character"
}

const f = async() => {
    try {
        let response = await axios(config)
        response.data.results.forEach(personaje => {
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
