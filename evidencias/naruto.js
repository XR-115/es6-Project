const axios= require('axios')

let config = {
    method: 'get',
    url: "https://animechan.vercel.app/api/quotes/anime?title=naruto"
}

const f = async() => {
    try {
        let response = await axios(config)
        
        response.data.forEach(frase => {
            console.log("    ");
            console.log(`Nombre: ${frase.anime}`);
            console.log(`Nombre: ${frase.character}`);
            console.log(`Nombre: ${frase.quote}`);
            console.log("    ");
            console.log("/*------*-------*/");
        })
    }
     catch (error) {

        console.error(error);
    }
}
f()
