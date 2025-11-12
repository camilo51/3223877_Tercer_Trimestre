const express = require("express");
const mysql = require("mysql2");
const bodyParse = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "notas_db"
})

db.connect((err) => {
    if (err) {
        console.log("Mensaje de error");
    }else{
        console.log("Exito al conectarse con la Base de datos ");
    }
})

app.use(express.static("public"));

app.post("/insert", (req, res) => {
    const { name, description } = req.body;
    const sql = "INSERT INTO notas (nombre, descripcion) VALUES (?, ?)";
    const values = [name, description]

    db.query(sql, values, (err, result) => {
        if (err) {
            console.log("Error al insertar los datos", err);
            return res.status(500).send("Error al insertar los datos");
        }
        console.log("Datos insertados correctamente", result);
        return res.status(200).send("Datos insertados correctamente");
    })
})

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto ", port);
})