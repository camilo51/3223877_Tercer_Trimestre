const express = require("express");
const router = express.Router();

const { mostrar} = require("./controllers/Cocteles.js");

router.get("/", mostrar);

module.exports = router; 