const axios= require('axios')

let config = {
    method: 'get',
    url: "https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations"
}

const f = async() => {
    try {
        let response = await axios(config)
        response.data.civilizations.forEach(personaje => {
            console.log("    ");
            console.log(`Nombre: ${personaje.name}`);
            console.log(`Tipo de armamento: ${personaje.army_type}`);
            console.log("    ");
            console.log("/*------*-------*/");
        });
    } catch (error) {

        console.error(error);
    }
}
f()