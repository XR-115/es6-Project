const request = require('request')

let endpoint='http://makeup-api.herokuapp.com/api/v1/products.json'

const r = request(endpoint, {json: true }, function(err , response, data){
    data.forEach(element => {
        console.log("    ");
        console.log(`Nombre: ${element.name}`);
        console.log(`Precio producto: ${element.price}`);
        console.log("    ");
        console.log("/*--------------*/");
    });
    // console.log(data)
})  