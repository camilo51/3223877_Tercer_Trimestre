const eventEmitter = require("events"); 
const emisor = new eventEmitter();

emisor.on("inicio", () => console.log(`El proceso ha comenzado`));

emisor.on("saludo", (nombre) => {
    console.log(`¡Hola ${nombre}!`);
});

emisor.once("progreso", (porcentaje) => {
    console.log(`Proceso al: ${porcentaje}%`);
});
emisor.on("mensaje", (usuario, content) => {
    console.log(`${usuario}: ${content} `);
});
emisor.on("final", () => {
    console.log(`El proceso ha finalizado`);
});


emisor.emit("inicio");
emisor.emit("progreso", 30);
emisor.emit("saludo", "Cristian");
emisor.emit("progreso", 50);
emisor.emit("mensaje", "Cristian", "Hola, ¿Como Estas?");
emisor.emit("mensaje", "Camilo", "Bien y tu?");
emisor.emit("final");