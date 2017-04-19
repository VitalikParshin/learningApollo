import '../App.css';

import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {

  add() {
    const hello = "hello World";
    console.log('function is working', hello);
    this.props.addValue(hello)
  }
  
  render() {
    console.log('INITIAL StoreState is: ', this.props.email)
    const {id, name, email} = this.props;
      
    return (
      <div>
        <li>
          <a>{id} </a>
          <a>{name} </a>
          <a>{email} </a>
          <button value="23"
            onClick={this.add.bind(this)}
          > add some value
          </button>
        </li>
      </div>
    );
  }
}

export default connect(
  // state => ({
    // email: state.auth.profile.email
  // }),
    
  dispatch => ({
    addValue: (value) => {
      dispatch({type: 'ADD', do: value})
    }
  })
)(Post);


// connect(Post())