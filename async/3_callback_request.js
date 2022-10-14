const request = require('request')

let endpoint='https://rickandmortyapi.com/api/character'

const r = request(endpoint, {json: true }, function(err , response, data){
    data.results.forEach(element => {
        console.log("    ");
        console.log(`Nombre: ${element.name}`);
        console.log(`Género: ${element.gender}`);
        console.log("    ");
        console.log("/*--------------*/");
    });
    // console.log(data)
})  