const EventEmitter = require("events");
const db = require("../config/db.js");

class Frutas extends EventEmitter {
    constructor(name, price, stock) {
        super();
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    insert() {
        console.log("Insertando datos...");
        console.log(`Datos: [${this.name}, ${this.price}, ${this.stock}]`);
        
        const sql = ("INSERT INTO frutas (name, price, stock) VALUES (?, ?, ?)")
        const values = [this.name, this.price, this.stock];
        db.query(sql, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                this.emit("finished");
            }
        })
    }
    finished() {
        console.log("Datos insertados corecctamente.");
    }
    list(callback) {
        const sql = "SELECT * FROM frutas";
        db.query(sql, (err, result) => {
            if (err) {
                console.log("Error al obtener frutas:", err);
                callback([]);
            } else {
                callback(result);
            }
        });
    }
}

module.exports = Frutas;