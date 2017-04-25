
import React, { Component } from 'react';

class MessageList extends Component {

  constructor(props) {
    super(props);
    console.log("props: ", props);
    this.state = {
      messages: props.messages
    };
  }

  actualiserListe(messages) {
    console.log("this actualiserListe: ", this);
    this.setState({ messages: messages });
  }

  render() {
    //{this.props.messages.map(message => ({ message }))}
    const messages = this.props.messages;
    const listItems = messages.map((message) =>
      <li key={message}>{message}</li>
    );
    return (
      <div>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default MessageList;
