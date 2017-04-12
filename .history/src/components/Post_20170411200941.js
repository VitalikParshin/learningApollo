import '../App.css';

import React, { Component } from 'react';

class Post extends Component {

  add() {
    const five = 5;
    console.log("This function is working")
    console.log("next state : ", this.props.addValue(five))


  }
  
  render() {
    console.log('INITIAL StoreState is: ', this.props.testStore)
    const {id, name, email} = this.props;
      
    return (
      <div>
        <li>
          {id} 
          {name} 
          {email}
        </li>

        <button value="23"
          onClick={this.add.bind(this)}
        > add Five to store
        </button>
      </div>
    );
  }
}

export default connect(
  state => ({
      testStore: state.auth
    }),
    
    dispatch => ({
      addValue: (value) => {
        dispatch({type: 'ADD', do: value})
      }
    })
  )(Post);


export default Post;