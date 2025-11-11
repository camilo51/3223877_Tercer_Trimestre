const eventEmitter = require("events"); 

class Descarga extends eventEmitter {
    init() {
        console.log("Iniciando descarga...");
        this.emit("init")
    }

    progress(porcentaje) {
        console.log(`Descarga: ${porcentaje}%`);
        this.emit("progress", porcentaje)
    }
    finish() {
        console.log("Descarga completa.");
        this.emit("finish")
    }
}

const descarga = new Descarga();

descarga.on("init", () => console.log(`El proceso ha comenzado`));
descarga.on("finish", () => console.log(`El proceso ha finalizado`));


descarga.init();
descarga.progress(40);
descarga.progress(60);
descarga.finish();
