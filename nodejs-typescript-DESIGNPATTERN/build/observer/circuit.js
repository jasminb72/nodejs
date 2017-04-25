"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circuit {
    constructor() {
        this.observateurs = new Array();
    }
    ajouterObservateur(vehicule) {
        this.observateurs.push(vehicule);
    }
    setState(state) {
        for (let vehicule of this.observateurs) {
            vehicule.update(state.etatPiste, state.etatLibelle);
        }
    }
}
exports.Circuit = Circuit;
