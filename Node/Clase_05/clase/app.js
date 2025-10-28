const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const datosRecibidos = [];

app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html')
});
app.post('/submit', (req, res) => {
    const datos = req.body;
    datosRecibidos.push(datos);
    // res.send("Datos recibidos" + JSON.stringify(datos));
    res.redirect('/mostrar')
});
app.get('/mostrar', (req, res) => {
    let html = `
        <h1>Datos Recibidos</h1>
        <table border="1">
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Edad</th>
            </tr>
            `;
    datosRecibidos.forEach(dato => (
        html += `<tr>
        <td>${dato.name}</td>
        <td>${dato.email}</td>
        <td>${dato.age}</td>
        </tr>`
    ))
    html += `</table>`;
    res.send(html);
            
});
app.listen(port, () => {
    console.log(`Server is running on port ${port} http://localhost:${port}`);
})

