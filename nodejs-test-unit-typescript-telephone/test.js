var expect = require('expect')
var Telephone = require('./telephone')
var etat=require("./etat");


describe('téléphone décroché', () => {
  it('doit rendre vrai', () => {
    var telephone = new Telephone();
    telephone.setEtat(etat.DECROCHE);
    telephone.raccrocher();
    expect(telephone.getEtat() === etat.RACCROCHE).toBe(true);
  });
});







