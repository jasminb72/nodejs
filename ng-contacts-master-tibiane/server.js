const express = require('express');

//ajouté par rapport au js standard
const path = require('path');
const http = require('http');
const api = require('./server/routes/module-api');
const app = express();

const bodyParser = require('body-parser');    // pull information from HTML POST (express4)

const ModuleService = require('./server/routes/module-service');
const mService = new ModuleService();

app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

//utiliser les API routes
app.use('/api',api);

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'dist/index.html'))
});

const port = 9484;
app.set('port',port);

const server = http.createServer(app);
server.listen(port,() =>console.log('API running on localhost: ',port));
