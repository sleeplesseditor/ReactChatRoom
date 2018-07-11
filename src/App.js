import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';
import NewRoomForm from './components/NewRoomForm';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    }
  }
  
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'sleeplesseditor',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })
    
    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 11412494,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
  }

  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
