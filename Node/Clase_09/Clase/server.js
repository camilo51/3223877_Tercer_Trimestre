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
    procesar.onCompleted(() => {
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
    })
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});