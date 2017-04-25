import { Vehicule } from "./vehicule";
import { Circuit } from "./circuit";
import { Observable } from "./observable";

export class Moto extends Vehicule {
  
    update(etatPiste: boolean, etatLibelle: string) {
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