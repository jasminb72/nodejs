"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vehicule_1 = require("./vehicule");
class Moto extends vehicule_1.Vehicule {
    update(etatPiste, etatLibelle) {
        switch (etatPiste) {
            case true:
                console.log("Moto roule à fond");
                break;
            case false:
                console.log("Moto ralenti (circuit:" + etatLibelle + ")");
                break;
        }
    }
}
exports.Moto = Moto;
