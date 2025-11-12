const express = require("express");
const mysql = require("mysql2");
const bodyParse = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.urlencoded({ extended: false }));



app.listen(port, () => {
    console.log(`El servidor se está ejecutando en el puerto: ${port}`);
})