
const server = require('http').createServer();
const io = require('socket.io')(server);
// Generate a v4 UUID (random) 
const uuidV4 = require('uuid/v4');


io.on('connection', (socket) => {
  console.log("connection serveur ok")
  let idPrenom = uuidV4();
  let objPrenom = {
    id: idPrenom,
    prenom: socket.handshake.query.prenom
  }
  console.log("objPrenom.prenom:", objPrenom);
  io.sockets.emit('envoiConnectPrenom', objPrenom);

  socket.on('msg', (objEnvoi) => {
    let id = uuidV4();
    objAEnvoyer = {
      id: id,
      saisie: objEnvoi.saisie,
      prenom: objEnvoi.prenom
    }
    io.sockets.emit('msg', objAEnvoyer);
  });
});

server.listen(3105);
