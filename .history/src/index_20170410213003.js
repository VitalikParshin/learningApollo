import './index.css';

import { combineReducers, createStore } from 'redux';

import Index from './components';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { client } from './components';
import reducers from './reducers';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import ComponentWithData from './App';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';




const store = createStore(
  combineReducers(Object.assign(reducers, {
    apollo: client.reducer(),
  })),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);




const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'});
export const client = new ApolloClient({ networkInterface: networkInterface});



ReactDOM.render(
  <ApolloProvider client={client} store={store}>
      <ComponentWithData />
  </ApolloProvider>,
  document.getElementById('root')
);
