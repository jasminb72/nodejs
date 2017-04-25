var expect = require('expect')
var Calculatrice = require('./calculatrice')
var Engine = require('./engine')
    var engine = new Engine();
    console.log(engine);
    console.log("²²²²²²²²" +calculatrice);
    var calculatrice = new Calculatrice(engine);
    console.log("²²²²²²²²1" +calculatrice);
    calculatrice.appuieTouche("1");
    expect(calculatrice.lireAffichage() === "1").toBe(true);