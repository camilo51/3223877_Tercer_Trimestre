const express = require('express');
const path = require('path');
const fs = require('fs');
const ProcesarPedido = require('./controllers/ProcesarPedido');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());


app.post('/pedido', (req, res) => {
    const pedido = req.body;
    const procesar = new ProcesarPedido(pedido);
    procesar.init();
    procesar.on("process", () => procesar.process());
    procesar.on("send", () => procesar.send());
    procesar.on("onCompleted", () => {
        const htmlContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>Resumen de pedido</h1>
                <pre>
                    ${JSON.stringify(pedido, null, 2)}
                </pre>
            </body>
            </html>
        `;
        fs.writeFile(path.join(__dirname, 'public','pedido_completado.html'), htmlContent, (err) =>{
            if (err) {
                console.error(err);
                res.status(500).send('Error al generar el pedido');
            }else{
                res.sendFile(path.join(__dirname, 'public','pedido_completado.html'));
                console.log('HTML Generado');
            }
        })
    })
})

app.get('/pedido', (req, res) => {
    const filePath = path.join(__dirname, 'public','pedido_completado.html');

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            return res.status(404).send(`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Pedido no encontrado</title>
                </head>
                <body>
                    <h1>No hay ningún pedido completado todavía</h1>
                    <p>Por favor, realiza un pedido usando el endpoint <code>POST /pedido</code>.</p>
                </body>
                </html>
            `);
        }
        res.sendFile(filePath);
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});