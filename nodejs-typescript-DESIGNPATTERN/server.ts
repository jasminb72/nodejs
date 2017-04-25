//Factory
import { ConfigFactory } from "./factory/configfactory";
import { IConfig } from "./factory/iconfig";
console.log("\n*****Factory*****");
var configFactory: ConfigFactory = new ConfigFactory();
var config: IConfig = configFactory.creerConfig();
config.coucou();

//Builder
console.log("\n*****Builder*****");
import { Ville } from "./builder/ville";
import { IVilleBuilder } from "./builder/ivillebuilder";
import { VilleBuilder } from "./builder/villebuilder";

//Pas de factory pour VilleBuilder, le but ici est de comprendre le pattern builder
var ivilleBuilder: IVilleBuilder = new VilleBuilder();
var ville: Ville = ivilleBuilder
    .withName("Nantes")
    .withPosition("47° 13' 2 N | -1° 33' 12 O")
    .getVille();
console.log(ville.toString());

//Observer
console.log("\n*****Observer*****");
import { Circuit } from "./observer/circuit";
import { Vehicule } from "./observer/vehicule";
import { Moto } from "./observer/moto";
import { Observateur } from "./observer/observateur";
import { Observable } from "./observer/observable";
var circuit: Observable = new Circuit();
var moto1: Observateur = new Moto();
moto1.addToObservable(circuit);
console.log("1er état");
circuit.setState({etatPiste:false,etatLibelle:"pilote tombé au virage 16"});
console.log("2eme état");
circuit.setState({etatPiste:true,etatLibelle:""});