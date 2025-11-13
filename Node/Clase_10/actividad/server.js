const express = require("express");
const path = require("path"); 
const bodyParse = require("body-parser");

const db = require("./config/db.js");
const routes = require("./routes.js");

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParse.urlencoded({ extended: false }));

db.connect((err) => {
    if (err) throw err;
    console.log("Conexión exitosa a la base de datos");
})

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el puerto: ${port}`);
})