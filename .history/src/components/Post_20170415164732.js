import '../App.css';

import React, { Component } from 'react';

import { connect } from 'react-redux'

class Post extends Component {

  add() {
    const five = "hello ";
    console.log('function is working', five);
    this.props.addValue(five)
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

        
        { this.props.emails } 
      </div>
    );
  }
}

export default connect(
  state => ({
      email: state.auth.profile.email
    }),
    
  dispatch => ({
    addValue: (value) => {
      dispatch({type: 'ADD', do: value})
    }
  })
)(Post);


connect(Post())