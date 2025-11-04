const fs = require("fs");

const getText = (pathFile) => {
    return new Promise((res, rej) => {
        fs.readFile(pathFile, "utf-8", (err, data) => {
            if (err) {
                rej(err);
                return;
            } else {
                res(data);
            }
        })
    })
}


// getText("./data/archivo.txt")
//     .then(console.log)
//     .catch(console.log)
// getText("./data/archivo2.txt")
//     .then(console.log)
//     .catch(console.log)

const read = async () => {
    try {
        const resultado1 = await getText("./data/archivo.txt");
        const resultado2 = await getText("./data/archivo2.txt");
    
        
        console.log(resultado1);
        console.log(resultado2);
        
        throw new Error("Error al intentar leer un archivo");
        
    } catch (error) {
        console.log(error);
        
    }
}

read()