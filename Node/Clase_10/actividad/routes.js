const express = require('express');
const Frutas = require('./controllers/Frutas');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})

router.post("/insert", (req, res) => {
    const {name, price, stock} = req.body;
    const procesar = new Frutas(name, price, stock)
    procesar.insert();
    procesar.on('finished', () => procesar.finished());
    res.redirect("/list");
})
router.get("/list", (req, res) => {
    const procesar = new Frutas();
    procesar.list((data) => {
        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Frutas | Cristian Pereira</title>
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <body class="bg-gray-200 p-5">
                <div class="w-6/12 mx-auto">
                    <div class="flex justify-end">
                        <a href="/" class="text-blue-700 underline hover:cursor-pointer hover:text-blue-400 mb-2">Volver</a>
                    </div>
                    <table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-gray-800 text-white">
                                <th class="text-start p-3">ID</th>
                                <th class="text-start p-3">Nombre</th>
                                <th class="text-start p-3">Precio</th>
                                <th class="text-start p-3">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((fruta) => `
                                <tr>
                                    <td class="p-3">${fruta.id}</td>
                                    <td class="p-3">${fruta.name}</td>
                                    <td class="p-3">${fruta.price}</td>
                                    <td class="p-3">${fruta.stock}</td>
                                </tr>    
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </body>
            </html>    
        `
        res.send(html);
    });
})

module.exports = router;