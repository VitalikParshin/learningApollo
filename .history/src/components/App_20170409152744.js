import '../App.css';

import React, { Component } from 'react';

import { connect } from 'react-redux';
import logo from '../logo.svg';

class App extends Component {
  add() {
    const five = 5;
      console.log(five)
  }
  render() {
    console.log('INITIAL StoreState this: ',this.props.testStore)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello world
        </p>
        <button value="23"
          onClick={this.add.bind(this)}
          >
        
        </button>

      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),

  dispatch => ({
    addDo: (value) => {
      dispatch({type: 'vitalik', do: value})
    }
  })
)(App);
