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
    update(id) {
        const sql = ("UPDATE frutas SET name = ?, price = ?, stock = ? WHERE id = ?");
        const values = [this.name, this.price, this.stock, id];

        db.query(sql, values, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                this.emit("finished");
            }
        })
    }
    delete(id){
        const sql = ("DELETE FROM frutas WHERE id = ?");
        db.query(sql, id, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                this.emit("finished");
            }
        })
    }
    finished() {
        console.log("Finalizacion de la consulta.");
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

    getById(id, callback){
        const sql = "SELECT * FROM frutas WHERE ? LIMIT 1";
        const values = {id: id};
        db.query(sql, values, (err, result) => {
            if (err) {
                console.log("Error al obtener la fruta:", err);
                callback([]);
            } else {
                callback(result[0]);
            }
        })
    }
}

module.exports = Frutas;