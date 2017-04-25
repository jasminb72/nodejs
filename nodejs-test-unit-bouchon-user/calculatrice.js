var etat=require("./engine");

function Calculatrice (iEngine) {
    this.iEngine=iEngine;
    
    this.appuieTouche=function(caractere){
        iEngine.setCarac(caractere);
    }
    this.lireAffichage=function(){
        return iEngine.getAffichage();
    }
	this.reset=function(){
        iEngine.reset();
    }
	
}

module.exports = {Calculatrice}


