const EventEmitter = require("events");

class Frutas extends EventEmitter {
    constructor(fruta) {
        super();
        this.fruta = fruta
    }

    init() {
        
    }
}