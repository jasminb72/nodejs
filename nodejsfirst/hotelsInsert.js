var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var hotels = require('./les_hotels_classes_en_ile-de-france.json');


var url = 'mongodb://localhost:27017/dbtest';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  for (hotel of hotels){
    
   db.collection('hotel').insert(hotel);

}
  db.close();
});


