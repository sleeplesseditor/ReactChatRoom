import React, { Component } from 'react';

class SendMessageForm extends Component {
    render() {
        return (
            <form className="send-message-form">
                <input 
                    placeholder="SendMessageForm"
                    type="text"
                />
            </form>
        )
    }
}

export default SendMessageForm;