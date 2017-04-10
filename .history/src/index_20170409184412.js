import './index.css';

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

import App from './components/App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'})
const client = new ApolloClient({networkInterface: networkInterface});



ReactDOM.render(
  
  <Provider store={store} >
    <ApolloProvider  client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
);
