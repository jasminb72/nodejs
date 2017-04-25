import { Circuit } from "./circuit";
import { Observable } from "./observable";
import { Observateur } from "./observateur";

export abstract class Vehicule implements Observateur {
    addToObservable(observable: Observable) {
        observable.ajouterObservateur(this);
    }
    abstract update(etatPiste: boolean, etatLibelle: string): any;
}