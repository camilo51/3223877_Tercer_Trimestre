const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.write("Bienvenido a la pagina principal");
        return res.end();
    }
    res.statusCode = 404;
    res.write("No existe la pagina");
    res.end();
});

server.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});