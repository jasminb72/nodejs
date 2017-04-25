import { VilleBuilder } from "./villebuilder";
import { Ville } from "./ville";

export interface IVilleBuilder{
    withName(name:string):VilleBuilder;
    withPosition(position:string):VilleBuilder;
    getVille():Ville;
}