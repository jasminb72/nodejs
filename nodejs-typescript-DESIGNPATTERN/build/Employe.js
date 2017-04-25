"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Formation_js_1 = require("./Formation.js");
/**
* Generated On: 2017-3-30
* Class: Employe
*/
var Employe = (function () {
    function Employe(nom) {
        this.nom = nom;
        this.formations = new Array();
        this.missions = new Array();
    }
    Employe.prototype.inscrireFormation = function (nom_formation) {
        console.log("nom_formation " + nom_formation);
        var formation1 = new Formation_js_1.Formation(nom_formation);
        console.log(formation1.toString());
        this.formations.push(formation1);
    };
    ;
    Employe.prototype.direCoucou = function () { console.log("coucou"); };
    ;
    return Employe;
}());
exports.Employe = Employe;
