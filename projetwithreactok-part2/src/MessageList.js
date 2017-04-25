
import React, { Component } from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      objEnvoi: props.objEnvoi
    };
  }

  render() {
    //{this.props.messages.map(message => ({ message }))}
    console.log("this.props.objEnvoi",this.props.objEnvoi);
    const objMessages = this.props.objEnvoi.objMessages;
    const listItems = objMessages.map((objMessage) =>
      <li key={objMessage.id}>{this.props.objEnvoi.objPrenom.prenom} : {objMessage.saisie}</li>
    );
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default MessageList;
