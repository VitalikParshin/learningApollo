import './index.css';

import App from './components/App';
import { Provider } from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reduser);



ReactDOM.render(
  
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);
