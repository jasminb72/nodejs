var express = require('express') ;
var app = express() ;
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var Q = require("q");

//init bodyParser to extract properties from POST data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function connectMongo(operation) {
	var url = 'mongodb://localhost:27017/dbtest';
	MongoClient.connect(url, operation);
}

//var mongoConnect = MongoClient.connect('mongodb://localhost:27017/dbtest');
var mongoConnect = MongoClient.connect('mongodb://localhost:27017/dbtest')
	.then(function (db) { console.log("Connection ok"); }).catch(function (err) {
		//l'objet
		var objErr = {
			libelle: "la connection à la base de donnée est KO",
			err: err
		};
		console.log(objErr);
	});
//2ème facon de gérer l'erreur
// .then(function (db) { console.log("ok"); },function (err) { 
// 	var objErr = {
// 		libelle:"erreur objet call back",
// 		err:err};
//console.log(objErr); });


app.get('/hotels', function (req, res) {
	mongoConnect.then(function (db) {
		//connectMongo(function (err, db) {
		db.collection('hotel').find({}, { "fields.nom_commercial": true, "fields.classement": true, "_id": false }).toArray(function (err, hotels) {
			res.send(hotels);
		});
		//}).catch(function(err){console.log("ca plante");});
	});
}) ;

app.get('/hotel/:id', function (req, res) {
	connectMongo(function (err, db) {
		db.collection('hotel').find({ recordid: req.params.id }).toArray(function (err, hotels) {
			res.send(hotels);
		});
	});
}) ;


app.get('/:codepostal/hotels', function (req, res) {
	connectMongo(function (err, db) {
		db.collection('hotel').find({ "fields.code_postal": parseInt(req.params.codepostal) }).toArray(function (err, hotels) {
			res.send(hotels);
		});
	});
}) ;

app.get('/hotels/:codepostal/statistiques/moyenneAggregate', function (req, res) {
	connectMongo(function (err, db) {
		//debut test
		codePostalInt = parseInt(req.params.codepostal);
		db.collection('hotel').aggregate(
			[
				{
					$match: {
						"fields.code_postal": codePostalInt
					}
				},
				{
					$group:
					{
						_id: "$fields.code_postal",
						avgClass: { $avg: "$fields.nbetoiles" }
					}
				}
			], function (err, result) {
				res.send("" + result[0].avgClass);
			}
		)

	});

});

app.get('/hotels/:codepostal/statistiques/moyenne', function (req, res) {
	totalEtoiles = 0;
	nbHotels = 0;

	connectMongo(function (err, db) {
		db.collection('hotel').find({ "fields.code_postal": parseInt(req.params.codepostal) }).toArray(function (err, hotels) {
			for (hotel of hotels) {
				nbHotels += 1;
				switch (hotel.fields.classement) {
					case "1 étoile":
						totalEtoiles += 1;
						break;
					case "2 étoiles":
						totalEtoiles += 2;
						break;
					case "3 étoiles":
						totalEtoiles += 3;
						break;
					case "4 étoiles":
						totalEtoiles += 4;
						break;
					case "5 étoiles":
						totalEtoiles += 5;
						break;
				}
			}
			if (nbHotels == 0) {
				res.send("0");
			} else {
				moy = totalEtoiles / nbHotels;
				res.send("" + moy);
			}
		});
	});
});


app.get('/hotels/:codepostal/statistiques/capacite', function (req, res) {
	connectMongo(function (err, db) {
		//debut test
		codePostalInt = parseInt(req.params.codepostal);
		db.collection('hotel').aggregate(
			[
				{
					$match: {
						"fields.code_postal": codePostalInt
					}
				},
				{
					$group:
					{
						_id: "$fields.code_postal",
						avgClass: { $sum: "$fields.capacite_d_accueil_personnes" }
					}
				}
			], function (err, result) {
				res.send("" + result[0].avgClass);
			}
		)

	});

});

app.post('/hotels/ajoutCommentaire', function (req, res) {
	connectMongo(function (err, db) {

		db.collection('commentaire').insert({
			"hotel": {
				"$ref": "hotel",
				"_id": new mongo.ObjectID(req.body.idHotel),
				"db": "dbtest"
			},
			"commentaire": req.body.comment,
			"dateCreation": new Date()
		}, function () {
			res.redirect('/hotels');
		});

	});

});

app.get('/hotel/:id/comments', function (req, res) {
	connectMongo(function (err, db) {
		//recup de l'hotel
		db.collection('hotel').find({ "_id": new mongo.ObjectID(req.params.id) }).toArray(function (err, hotel) {
			//recup des commentaires
			db.collection('commentaire').find({ "hotel._id": new mongo.ObjectID(req.params.id) }).toArray(function (err, commentaires) {
				var obj = {
					hotel: hotel,
					commentaires: commentaires
				}
				console.log(obj);
				res.send(obj);
			});
		});
	});
}) ;

app.get('/hotel/:id/commentsPromises', function (req, res) {


	var getHotel = function (db) {
		var d = Q.defer();
		db.collection('hotel').find({ "_id": new mongo.ObjectID(req.params.id) }).toArray(function (err, hotel) {

			if (err) {
				d.reject(err);
			} else {
				d.resolve(hotel);
			}
		});
		return d.promise;
	}

	mongoConnect.then(function (db) {
		//console.log(getHotel(db));
		getHotel(db).then(function (hotel) {
			//console.log(hotel);
		})
	})
		;
});



app.listen(3000) ;

