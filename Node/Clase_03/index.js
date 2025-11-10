// const modulo = require("./modules/myModule")
// console.log(modulo);

// const operaciones = require("./modules/operaciones")
// console.log(`La suma es: ${operaciones.suma(5, 5)}`);
// console.log(`La resta es: ${operaciones.resta(5, 10)}`);

// const os = require("os");
// console.log("Sistema Operativo", os.type());
// console.log("Memoria Libre", os.freemem());
// console.log("Arquitectura", os.arch());

// const memoriaTotal = os.totalmem();
// // console.log("Memoria Libre en GB", os.freemem());
// console.log(`Memoria total en GB ${(memoriaTotal / (1024*1024*1024)).toFixed(0)}`);



const {suma, resta, multiplicacion, division} = require("./modules/operaciones.js");

console.log(`La suma es: ${suma(5, 5)}`);
console.log(`La resta es: ${resta(5, 10)}`);
console.log(`La multiplicacion es: ${multiplicacion(5, 10)}`);
console.log(`La division es: ${division(5, 10)}`);
