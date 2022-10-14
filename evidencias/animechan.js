const axios= require('axios')

let config = {
    method: 'get',
    url: "https://animechan.vercel.app/api/random"
}

const f = async() => {
    try {
        let response = await axios(config)
        
            console.log(`Nombre: ${response.data.anime}`);
            console.log(`Nombre: ${response.data.quote}`);
            console.log("    ");
            console.log("/*------*-------*/");
    }
     catch (error) {

        console.error(error);
    }
}
f()
