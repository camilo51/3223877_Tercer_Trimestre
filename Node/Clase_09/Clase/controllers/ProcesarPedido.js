const eventEmitter = require("events"); 

class ProcesarPedido extends eventEmitter{
    constructor(pedido){
        super();
        this.pedido = pedido;
    }

    init(){
        console.log("Iniciando el proceso del pedido...", this.pedido);
        setInterval(() => {
            console.log("Pedido recibido...");
            this.emit("process")
        }, 5000)
    }
    process(){
        setTimeout(() => {
            console.log("Procesando pedido...");
            this.emit("Enviar");
        }, 5000)
    }
    send(){
        setTimeout(() => {
            console.log("Enviando Pedido...");
            this.emit("completed");
        }, 5000)
    }
    completed(){
        console.log("Enviando Pedido...");
        this.emit("completed");
    }
    onCompleted(callback){
        this.on("completed", callback());
    }
}

module.exports = ProcesarPedido;