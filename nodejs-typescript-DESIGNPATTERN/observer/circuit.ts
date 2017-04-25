import { Vehicule } from "./vehicule";
import { Observable } from "./observable";
import { Observateur } from "./observateur";

export class Circuit implements Observable {
    observateurs:Array<Observateur>=new Array();
    
     ajouterObservateur(vehicule:Vehicule){
        this.observateurs.push(vehicule);
    }

    setState(state:any){
       for(let observateur of this.observateurs){
            observateur.update(state.etatPiste,state.etatLibelle);
       } 
    }
}