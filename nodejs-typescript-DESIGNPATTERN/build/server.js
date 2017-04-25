"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Factory
const configfactory_1 = require("./factory/configfactory");
console.log("\n*****Factory*****");
var configFactory = new configfactory_1.ConfigFactory();
var config = configFactory.creerConfig();
config.coucou();
//Builder
console.log("\n*****Builder*****");
const villebuilder_1 = require("./builder/villebuilder");
//Pas de factory pour VilleBuilder, le but ici est de comprendre le pattern builder
var ivilleBuilder = new villebuilder_1.VilleBuilder();
var ville = ivilleBuilder
    .withName("Nantes")
    .withPosition("47° 13' 2 N | -1° 33' 12 O")
    .getVille();
console.log(ville.toString());
//Observer
console.log("\n*****Observer*****");
const circuit_1 = require("./observer/circuit");
const moto_1 = require("./observer/moto");
var circuit = new circuit_1.Circuit();
var moto1 = new moto_1.Moto();
moto1.addToObservable(circuit);
console.log("1er état");
circuit.setState({ etatPiste: false, etatLibelle: "pilote tombé au virage 16" });
console.log("2eme état");
circuit.setState({ etatPiste: true, etatLibelle: "" });
