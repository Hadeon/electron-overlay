import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store.js';
import { addMessage, removeMessage } from './actions';

const tmi = require('tmi.js');
const opts = {
  options: {
    debug: true,
    clientId: 'your client Id here'
  },
  identity: {
    username: 'your username',
    password: 'your password'
  },
  channels: [
    'your channels'
  ],
  connection: {
    reconnect: true,
    secure: true
  }
};

const client = new tmi.client(opts);

client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

client.connect();

let messageId = 1;

function onMessageHandler (target, context, msg, self) {
  let id = messageId;
  return new Promise(function(resolve, reject) {
      if (self) { return; } // Ignore messages from the bot
      // Add messages as the bot reads them
      store.dispatch(addMessage(messageId, context['display-name'], msg))
      messageId++;
      resolve();
    }).then(() => {
      setTimeout(function() {
        store.dispatch(removeMessage(id));
      }, 25000);
    }
  )
}

function onConnectedHandler (addr, port) {
  console.log(`*** Connected to ${addr}:${port}`);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
