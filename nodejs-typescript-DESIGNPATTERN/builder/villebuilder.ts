import { Ville } from './ville';
import { IVilleBuilder } from './ivillebuilder'

export class VilleBuilder implements IVilleBuilder {
    ville: Ville;
    constructor() {
        this.ville = new Ville();
    }

    withName(nom: string) {
        this.ville.setName(nom);
        return this;
    }

    withPosition(position: string) {
        this.ville.setPosition(position);
        return this;
    }
    getVille() {
        return this.ville;
    }
}