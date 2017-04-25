"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicule {
    addToObservable(observable) {
        observable.ajouterObservateur(this);
    }
}
exports.Vehicule = Vehicule;
