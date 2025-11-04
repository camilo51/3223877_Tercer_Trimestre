const fs = require("fs");
const https = require("https");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, {'Content-Type': 'text/html'});
        // Proceso 1
        fs.readFile('./data/archivo.txt', 'utf-8', (err, data) => {
            if (err) {
                res.write("Error al leer el archivo: " + err);
                return res.end();
            }else{
                res.write("Contenido del archivo: " + data + '\n')
            }
            https.get('https://jsonplaceholder.typicode.com/todos/1', (resp) => {
                let jsonData = '';
                resp.on('data', (chunk) => {
                    jsonData += chunk;
                }) 
                resp.on('end', () => {
                    res.write("Los datos solicitados son: \n" + JSON.stringify(JSON.parse(jsonData), null, 2) + '\n');
                    setTimeout(() => {
                        res.write("Temporizador que se complete despues de hacer 2 segundos")
                        res.end();
                    }, 2000)
                });
            }).on("error", (err) => {
                res.write("Error en la solicitud" + err + "\n");
                res.end();
            })

        });
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("Pagina no encontrada");
    }
})
server.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
})