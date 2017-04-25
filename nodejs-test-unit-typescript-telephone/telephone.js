var etat=require("./etat");

function Telephone () {
    this.etat;

    this.getEtat = function () {
        return this.etat;
    };
    this.setEtat = function (etat) {
        this.etat = etat;
    };

        this.setEtat = function (etat) {
            console.log(etat);
        this.etat = etat;
    };

    this.raccrocher=function(){
        console.log(this);
		this.setEtat(etat.RACCROCHE);
	}

}

module.exports = Telephone


