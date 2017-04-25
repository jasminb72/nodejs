"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Ville {
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPosition() {
        return this.position;
    }
    setPosition(position) {
        this.position = position;
    }
    toString() {
        return "Nom: " + this.getName() + ", position: " + this.getPosition();
    }
}
exports.Ville = Ville;
