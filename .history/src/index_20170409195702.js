import './index.css';

import Index from './components';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';

// import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';


// const store = createStore(reducer);

// const networkInterface = createNetworkInterface({uri: 'http://localhost:3010/graphql'})
// const client = new ApolloClient({networkInterface: networkInterface});



ReactDOM.render(
  
  <Provider store={store} >
      <Apps />
  </Provider>,
  document.getElementById('root')
);
