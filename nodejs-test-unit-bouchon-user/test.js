var expect = require('expect')
var module = require('./calculatrice')
var sinon = require('sinon')

describe('calculatrice réinitialisé', () => {
  it('doit rendre vrai', () => {
    var engine = {
      reset: function () {
      }, 
      getAffichage: function () {
        return "";
      },
      setCarac: function (caractere) {
        return "";
      }
    };
    //La fonction que je compte modifier
    var engineRef = sinon.stub(engine, 'getAffichage');
    //Sa nouvelle valeur de retour
    engineRef.returns("3");    

    calculatrice = new module.Calculatrice(engine);
    //La nouvelle fonction est modifiée à la volée
    expect(calculatrice.lireAffichage() === "3").toBe(true);
  });
});








