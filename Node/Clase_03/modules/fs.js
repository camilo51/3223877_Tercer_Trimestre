const fs = require("fs");

try {
    const texto = fs.readFileSync("./data/archivo.txt", "utf-8");
    const datos = fs.writeFileSync("./data/archivo.txt", `${texto} \nContenido del archivo`)

    fs.unlinkSync("./data/archivo.txt")
    
} catch (error) {
    console.error("Error al Leer el archivo");
    
}