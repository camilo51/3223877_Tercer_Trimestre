// console.log("Inicio");
// console.log("Proceso 1");

// setTimeout(() => {
//     console.log("Proceso 2");
// }, 2000)
// setTimeout(() => {
//     console.log("Proceso 3");
// }, 3000)

// console.log("Final");

const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Bienvenido a la pagina principal");
        return res.end();
    }
    if(req.url === "/otros"){
        res.write("Bienvenido a otros");
        for (let i = 0; i < 100; i++) {
            console.log(Math.random() + i);
            
        }
        return res.end();
    }
    res.statusCode = 404;
    res.write("No existe la pagina");
})
server.listen(3000, () => {
    console.log("Servidor Escuchando en el puerto 3000");
})