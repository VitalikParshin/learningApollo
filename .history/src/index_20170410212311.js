import './index.css';

import { combineReducers, createStore } from 'redux';

import Index from './components';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { client } from './components';
import reducers from './reducers';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';


const authReducer = {email: 'v.asd@sadfasdf'}
const apolloReducer = client.reducer();

const newReducers = Object.assign(reducers, {
  apollo: client.reducer(),
})

const store = createStore(
  combineReducers(newReducers,),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'})
// const client = new ApolloClient({networkInterface: networkInterface});



ReactDOM.render(
  <Provider store={store} >
      <Index />
  </Provider>,
  document.getElementById('root')
);
