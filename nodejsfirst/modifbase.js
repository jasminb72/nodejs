var express = require('express') ;
var app = express() ;
var MongoClient = require('mongodb').MongoClient;

function connectMongo(operation) {
    var url = 'mongodb://localhost:27017/dbtest';
    MongoClient.connect(url, operation);
}

connectMongo(function (err, db) {
    db.collection('hotel').find().toArray(function (err, hotels) {
        for (hotel of hotels) {
            nbetoiles=parseInt(hotel.fields.classement.substring(0,1));
            db.collection('hotel').update({ "_id": hotel._id }, { $set: { "fields.nbetoiles": nbetoiles } })

        }

    });
    console.log("insert fini.");
});