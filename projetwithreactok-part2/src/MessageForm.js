
import React, { Component } from 'react';

class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saisie: ""
        };
    }


    valider(event) {
        event.preventDefault(); //annule le comportement normal du formulaire (envoi)
        this.props.onSend(this.state.saisie);
        this.setState({ saisie: "" });
    }

    actualiserTexte(event) {
        this.setState({ saisie: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.valider.bind(this)}>
                    <input type="text" name="saisie" value={this.state.saisie} onChange={this.actualiserTexte.bind(this)}></input>
                    <button >Envoyer</button>
                </form>
            </div>
        );
    }
}

//définit quels propriétés peut on mettre dans l'objet
MessageForm.propTypes = {
    onSend: React.PropTypes.func.isRequired
};


export default MessageForm;
