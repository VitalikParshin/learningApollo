import './index.css';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import { ApolloProvider } from 'react-apollo';
// import ComponentWithData from './components/PostList';
import ComponentWithData from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
const networkInterface = createNetworkInterface({uri: 'https://api.graph.cool/simple/v1/cj1j8msk1162q0128sdchs0fj'});
const client = new ApolloClient({ networkInterface: networkInterface});



const store = createStore(
  combineReducers(Object.assign(reducers, {
    apollo: client.reducer(),
  })),
  {},
  compose(
    applyMiddleware(client.middleware()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(
  <ApolloProvider client={client} store={store}>
      <ComponentWithData />
  </ApolloProvider>,
  document.getElementById('root')
);
