import { Observable } from "./observable";

export interface Observateur {
    addToObservable(observable:Observable):any;
    update(etatPiste:boolean,etatLibelle:string):any;
}