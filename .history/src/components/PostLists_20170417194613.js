import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostLists extends Component {

  addComment() {
    const hello = "hello World";
    console.log('function is working', hello);
    // this.props.addValue(hello)
  }
  
  render() {
    // console.log('INITIAL StoreState is: ', this.props.email)
      
    return (
      <div>
        <li>
          <a>{id} </a>
          <a>{name} </a>
          <button value="23"
            onClick={this.add.bind(this)}
          > add Comment
          </button>
        </li>
      </div>
    );
  }
}

const myQuery =  gql`
  query Comments {
    allCommentses {
      id
      name
    }
  }
`;


export default graphql(myQuery)(PostLists)
// export default connect(
//   state => ({
//     // email: state.auth.profile.email
//   }),
    
//   dispatch => ({
//     addValue: (value) => {
//       dispatch({type: 'ADD', do: value})
//     }
//   })
// )(Post);



