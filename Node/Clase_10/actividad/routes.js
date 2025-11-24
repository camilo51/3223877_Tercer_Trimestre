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
    const frutas = new Frutas();
    frutas.list((data) => {
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
                    ${data.length > 0 ? `
                    <table class="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                        <thead>
                            <tr class="bg-gray-800 text-white">
                                <th class="text-start p-3">ID</th>
                                <th class="text-start p-3">Nombre</th>
                                <th class="text-start p-3">Precio</th>
                                <th class="text-start p-3">Cantidad</th>
                                <th class="text-start p-3">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.map((fruta) => `
                                <tr>
                                    <td class="p-3">${fruta.id}</td>
                                    <td class="p-3">${fruta.name}</td>
                                    <td class="p-3">${fruta.price}</td>
                                    <td class="p-3">${fruta.stock}</td>
                                    <td class="p-3 flex gap-1 items-center">
                                        <a href="/edit/${fruta.id}" class="bg-yellow-200 text-yellow-600 p-2 rounded hover:cursor-pointer hover:scale-110 transition-all duration-300 inline-block">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                                            </svg>
                                        </a>
                                        <form action="/delete/${fruta.id}" method="post" class="">
                                            <button class="bg-red-200 text-red-600 p-2 rounded hover:cursor-pointer hover:scale-110 transition-all duration-300 inline-block">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                                    <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </form>
                                    </td>
                                </tr>    
                            `).join('')} 
                        </tbody>
                    </table>
                    `: '<p class="p-2 bg-gray-300 text-gray-900 font-bold uppercase text-center mt-4 rounded">No hay datos</p>'}
                </div>
            </body>
            </html>    
        `
        res.send(html);
    });

})
router.get('/edit/:id', (req, res) => { 
    const id = req.params.id;
    const frutas = new Frutas();
    frutas.getById(id, (data) => {
        const html = `
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Editar | Cristian Pereira</title>
                <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <body class="bg-gray-200">
                <form method="post" class="bg-white p-4 rounded-lg shadow-md mx-auto mt-10 max-w-md">
                    <fieldset>
                        <legend class="text-center font-bold text-xl mb-4 uppercase">Editar fruta</legend>
                        <div class="flex justify-end ">
                            <a href="/list" class="text-blue-700 underline hover:cursor-pointer hover:text-blue-400 mb-2">Volver</a>
                        </div>
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-bold mb-1 text-sm">Nombre</label>
                            <input type="text" required name="name" id="name" value="${data.name}" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-gray-200" placeholder="Ej: Manzana">
                        </div>
                        <div class="mb-4">
                            <label for="price" class="block text-gray-700 font-bold mb-1 text-sm">Precio</label>
                            <input type="number" required name="price" id="price" value="${data.price}" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-gray-200" placeholder="Ej: 2000">
                        </div>
                        <div class="mb-4">
                            <label for="stock" class="block text-gray-700 font-bold mb-1 text-sm">Cantidad</label>
                            <input type="number" required name="stock" id="stock" value="${data.stock}" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 placeholder:text-gray-200" placeholder="Ej: 20">
                        </div>
                    </fieldset>
                    <div>
                        <button type="submit" class="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md hover:cursor-pointer">Editar</button>
                    </div>
                </form>
            </body>
            </html>
        `;

        res.send(html);
    })
})
router.post('/edit/:id', (req, res) => {
    const {name, price, stock} = req.body;
    const id = req.params.id;
    const fruta = new Frutas(name, price, stock);
    fruta.update(id);
    fruta.on('finished', () => fruta.finished());
    res.redirect("/list");
})
router.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    const fruta = new Frutas();
    fruta.delete(id);
    fruta.on('finished', () => fruta.finished());
    res.redirect("/list");
})

module.exports = router;