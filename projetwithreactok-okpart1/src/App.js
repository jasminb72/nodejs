
import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import SocketIo from 'socket.io-client';
var socket = SocketIo.connect('http://localhost:3105'); //port au hasard

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  ajouterMessage(saisie) {
    this.setState({
      messages: [...this.state.messages, saisie]
    });
  }


  render() {
    return (
      <div>
        <MessageList messages={this.state.messages}/>
        <MessageForm onSend={this.ajouterMessage.bind(this)} />
      </div>
    );
  }
}

export default App;
