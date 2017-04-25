var express = require('express') ;
var app = express() ;
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var Q = require("q");

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//vue gérée par ejs
app.set('view engine', 'ejs');

function connectMongo(operation) {
	var url = 'mongodb://localhost:27017/dbtest';
	MongoClient.connect(url, operation);
}

app.get('/hello-world', function (req, res) {
	res.send("Hello World");
}) ;

app.get('/coucou/:name', function (req, res) {
	var name = { content: req.params.name };
	res.render('coucou', {
		name: name
	});
}) ;

app.get('/ping', function (req, res) {
	connectMongo(function (err, db) {
		console.log(req.query.message);
		db.collection('ping').insert({
			"message": req.query.message,
			"dateCreation": new Date()
		});
		res.send("OK");
	});
});

app.post('/message', function (req, res) {
	connectMongo(function (err, db) {

		db.collection('message').insert({
			"auteur": req.body.auteur,
			"message": req.body.message
		});
		res.send("OK");
	});

});

app.get('/messages', function (req, res) {
	//connectMongo(function (err, db) {
	connectMongo(function (err, db) {
		db.collection('message').find().toArray(function (err, messages) {
			res.send(messages);
		});
	});
}) ;

app.get('/messages/:auteur', function (req, res) {
	connectMongo(function (err, db) {
		db.collection('message').find({ "auteur": req.params.auteur }).toArray(function (err, messages) {
			res.send(messages);
		});
	});
});

app.listen(3000) ;