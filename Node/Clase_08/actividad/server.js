const express = require('express');
const path = require('path');
const routes = require("./routes.js") 

const app = express();
const port  = process.env.PORT || 3000;

app.use("/", routes)
app.use(express.static(path.join(__dirname, 'public'), {
    etag: false,
    lastModified: false,
    maxAge: 0,
    cacheControl: false
}));


app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
})