import { Observateur } from "./observateur"
import { Vehicule } from "./vehicule";

export interface Observable{
    observateurs:Array<Observateur>;
    ajouterObservateur(vehicule:Vehicule):any;
    setState(state:any):any
}