
import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SocketIo from 'socket.io-client';
//socket = SocketIo.connect('http://localhost:3105'); //port au hasard

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objPrenom: null,
      objMessages: []
    };
  }

  componentWillMount() {
    var prenom = prompt("Identification, veuillez saisir votre prenom", "mon prenom");

    this.socket = SocketIo.connect('http://localhost:3105', { query: { "prenom": prenom } }); //port au hasard
    this.socket.on('msg', function (objMessage) {
      this.setState({ objMessages: [...this.state.objMessages, objMessage] });
    }.bind(this));

    this.socket.on('envoiConnectPrenom', (objPrenom) => {
      console.log("retour serveur connectPrenom:", objPrenom);
      this.setState({ objPrenom: objPrenom });
    })

  }



  componentWillUnmount() {
    this.socket.close();
  }

  ajouterMessage(saisie) {
    // this.setState({
    //   objMessages: [...this.state.objMessages, saisie]
    // });
    let objMessages = [];
    objMessages = [...this.state.objMessages, saisie];
    let objEnvoi = {
      objMessages,
      objPrenom: this.state.objPrenom
    }
    console.log(objEnvoi);
    this.socket.emit("msg", objEnvoi);
  }


  render() {
    return (
      <div>
        <MessageList objEnvoi={this.state.objEnvoi} />
        <MessageForm onSend={this.ajouterMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
