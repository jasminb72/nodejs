var MongoClient = require('mongodb').MongoClient;


// var url = 'mongodb://localhost:27017/dbtest';
// MongoClient.connect(url, function (err, db) {
//     db.collection('hotel').find().toArray(function (err, items) {
//         console.log(items);
//     });
// });


//listerTousHotels();
//obtenirHotelparrecordid("b52d097b1bd188a258e666ffdbc1531159285fd2");
obtenirHotelsParCodePostal(92091);

function connectMongo(operation) {
    var url = 'mongodb://localhost:27017/dbtest';
    MongoClient.connect(url, operation);
}


function listerTousHotels() {
    connectMongo(function (err, db) {
        db.collection('hotel').find({}, { "fields.nom_commercial": true, "fields.classement": true, "_id": false }).toArray(function (err, hotels) {
            // console.log(hotel);
            for (hotel of hotels) {
                console.log(hotel.fields.classement);
            }

        });
    });
}

function obtenirHotelparrecordid(recordid) {
    connectMongo(function (err, db) {
        db.collection('hotel').find({ recordid: recordid }).toArray(function (err, items) {
            console.log(items);
        });
    });
}

function obtenirHotelsParCodePostal(codepostal) {
    connectMongo(function (err, db) {
        db.collection('hotel').find({ "fields.code_postal": codepostal }).toArray(function (err, items) {
            console.log(items);
        });
    });
}

