const eventEmitter = require("events"); 

class ProcesarPedido extends eventEmitter{
    constructor(pedido){
        super();
        this.pedido = pedido;
    }

    init(){
        console.log("Iniciando el proceso del pedido...", this.pedido);
        setTimeout(() => {
            console.log("Pedido recibido...");
            this.emit("process")
        }, 1000)
    }
    process(){
        setTimeout(() => {
            console.log("Procesando pedido...");
            this.emit("send");
        }, 1000)
    }
    send(){
        setTimeout(() => {
            console.log("Enviando Pedido...");
            this.emit("onCompleted");
        }, 1000)
    }
    onCompleted(callback){
        this.on("completed", callback());
    }
}

module.exports = ProcesarPedido;