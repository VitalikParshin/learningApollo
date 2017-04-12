import './index.css';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';

import { ApolloProvider } from 'react-apollo';
import ComponentWithData from './components/App';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import 

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';

const client = new ApolloClient({ networkInterface: networkInterface});
const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});


const store = createStore(
  combineReducers(Object.assign(reducers, {
    apollo: client.reducer(),
  })),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);








ReactDOM.render(
  <ApolloProvider client={client} store={store}>
      <ComponentWithData />
  </ApolloProvider>,
  document.getElementById('root')
);
