var fs = require("fs");
var file = fs.readFileSync('essai.json') ;
console.log(file) ;
//-> '[ { ''nom'' : ''Doe'', ''prenom'' : ''John'' } ]'
