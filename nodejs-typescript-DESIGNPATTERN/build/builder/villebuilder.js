"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ville_1 = require("./ville");
class VilleBuilder {
    constructor() {
        this.ville = new ville_1.Ville();
    }
    withName(nom) {
        this.ville.setName(nom);
        return this;
    }
    withPosition(position) {
        this.ville.setPosition(position);
        return this;
    }
    getVille() {
        return this.ville;
    }
}
exports.VilleBuilder = VilleBuilder;
